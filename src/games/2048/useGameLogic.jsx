import { useState, useEffect, useCallback } from "react";

const GRID_SIZE = 4;
const WIN_TILE = 2048;

// --- Helper Functions ---

// Initialize an empty board
const createEmptyBoard = () =>
  Array(GRID_SIZE)
    .fill(null)
    .map(() => Array(GRID_SIZE).fill(0));

// Find empty cells
const getEmptyCells = (board) => {
  const cells = [];
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      if (board[r][c] === 0) {
        cells.push([r, c]);
      }
    }
  }
  return cells;
};

// Add a random tile (2 or 4) to an empty cell
const addRandomTile = (board) => {
  const emptyCells = getEmptyCells(board);
  if (emptyCells.length === 0) {
    return board; // No space left
  }

  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const [r, c] = emptyCells[randomIndex];
  const newValue = Math.random() < 0.9 ? 2 : 4; // 90% chance of 2, 10% chance of 4

  const newBoard = board.map((row) => [...row]); // Create a new copy
  newBoard[r][c] = newValue;
  return newBoard;
};

// --- Movement Logic Helpers ---

// Compress line (remove zeros) -> [2, 0, 2, 0] => [2, 2]
const compress = (line) => line.filter((cell) => cell !== 0);

// Merge tiles in a line -> [2, 2, 4, 0] => [4, 4, 0, 0] score += 4
const merge = (line) => {
  let newLine = [...line];
  let scoreToAdd = 0;
  for (let i = 0; i < newLine.length - 1; i++) {
    if (newLine[i] !== 0 && newLine[i] === newLine[i + 1]) {
      newLine[i] *= 2;
      scoreToAdd += newLine[i];
      newLine[i + 1] = 0; // Mark the merged tile as 0
      // Don't skip the next cell - allows merges like [2, 2, 2, 2] -> [4, 0, 4, 0]
    }
  }
  // Filter out the zeros created by merging
  newLine = compress(newLine);
  return { mergedLine: newLine, scoreAdded: scoreToAdd };
};

// Pad line with zeros to the right -> [4, 4] => [4, 4, 0, 0]
const pad = (line) => {
  const paddedLine = [...line];
  while (paddedLine.length < GRID_SIZE) {
    paddedLine.push(0);
  }
  return paddedLine;
};

// Process a single line (compress, merge, pad)
const processLine = (line) => {
  const compressedLine = compress(line);
  const { mergedLine, scoreAdded } = merge(compressedLine);
  const paddedLine = pad(mergedLine);
  return { newLine: paddedLine, scoreDelta: scoreAdded };
};

// Rotate board 90 degrees clockwise
const rotateClockwise = (board) => {
  const newBoard = createEmptyBoard();
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      newBoard[c][GRID_SIZE - 1 - r] = board[r][c];
    }
  }
  return newBoard;
};

// Rotate board 90 degrees counter-clockwise
const rotateCounterClockwise = (board) => {
  const newBoard = createEmptyBoard();
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      newBoard[GRID_SIZE - 1 - c][r] = board[r][c];
    }
  }
  return newBoard;
};

// --- Main Hook ---

export const useGameLogic = () => {
  const [board, setBoard] = useState(createEmptyBoard);
  const [score, setScore] = useState(0);
  // Game state: 'playing', 'won', 'lost'
  const [gameState, setGameState] = useState("playing");
  const [hasWon, setHasWon] = useState(false); // Track if win condition met, but allow continued play

  // Function to compare two boards
  const boardsAreEqual = (board1, board2) => {
    return JSON.stringify(board1) === JSON.stringify(board2);
  };

  // Check for Win condition (2048 tile)
  const checkForWin = useCallback((currentBoard) => {
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        if (currentBoard[r][c] === WIN_TILE) {
          return true;
        }
      }
    }
    return false;
  }, []);

  // Check for possible moves (Game Over condition)
  const canMove = useCallback((currentBoard) => {
    // Check for empty cells
    if (getEmptyCells(currentBoard).length > 0) {
      return true;
    }

    // Check for possible merges horizontally and vertically
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        const current = currentBoard[r][c];
        // Check right neighbor
        if (c < GRID_SIZE - 1 && current === currentBoard[r][c + 1]) {
          return true;
        }
        // Check bottom neighbor
        if (r < GRID_SIZE - 1 && current === currentBoard[r + 1][c]) {
          return true;
        }
      }
    }
    return false; // No empty cells and no possible merges
  }, []);

  // Check game status after a move
  const updateGameState = useCallback(
    (currentBoard, currentScore) => {
      if (!hasWon && checkForWin(currentBoard)) {
        setHasWon(true);
        // Set state to 'won' but allow playing further if desired by UI
        // For simplicity here, we'll end the game on win, but it could be modified
        // setGameState('won');
        // console.log("You Win!"); // Or trigger a modal
      } else if (!canMove(currentBoard)) {
        setGameState("lost");
        // console.log("Game Over!");
      }
    },
    [hasWon, canMove, checkForWin]
  );

  // Move Logic
  const move = useCallback(
    (direction) => {
      if (gameState !== "playing") return; // Don't move if game is over

      let currentBoard = board;
      let rotatedBoard = board;
      let scoreToAdd = 0;
      let boardChanged = false;

      // Rotate board so we always process rows moving left
      if (direction === "up")
        rotatedBoard = rotateCounterClockwise(currentBoard);
      else if (direction === "right")
        rotatedBoard = rotateClockwise(rotateClockwise(currentBoard)); // 180deg
      else if (direction === "down")
        rotatedBoard = rotateClockwise(currentBoard);
      // 'left' requires no rotation

      const processedBoard = createEmptyBoard();
      for (let r = 0; r < GRID_SIZE; r++) {
        const { newLine, scoreDelta } = processLine(rotatedBoard[r]);
        processedBoard[r] = newLine;
        scoreToAdd += scoreDelta;
      }

      // Rotate back to original orientation
      let finalBoard = processedBoard;
      if (direction === "up") finalBoard = rotateClockwise(processedBoard);
      else if (direction === "right")
        finalBoard = rotateClockwise(
          rotateClockwise(processedBoard)
        ); // 180deg back
      else if (direction === "down")
        finalBoard = rotateCounterClockwise(processedBoard);

      boardChanged = !boardsAreEqual(currentBoard, finalBoard);

      if (boardChanged) {
        const boardWithNewTile = addRandomTile(finalBoard);
        setBoard(boardWithNewTile);
        setScore((prevScore) => prevScore + scoreToAdd);
        // Check win/lose conditions AFTER adding the new tile
        updateGameState(boardWithNewTile, score + scoreToAdd);
      }
      // If no change, do nothing
    },
    [board, score, gameState, updateGameState]
  );

  // Reset Game
  const resetGame = useCallback(() => {
    const initialBoard = addRandomTile(addRandomTile(createEmptyBoard()));
    setBoard(initialBoard);
    setScore(0);
    setGameState("playing");
    setHasWon(false);
  }, []);

  // Initialize game on mount
  useEffect(() => {
    resetGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  return { board, score, gameState, move, resetGame };
};
