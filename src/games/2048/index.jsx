import React, { useEffect, useCallback } from "react";
import Header from "./Header";
import Board from "./Board";
import GameOverOverlay from "./GameOverlay";
import { useGameLogic } from "./useGameLogic";
import "./game.css";

function App() {
  const { board, score, gameState, move, resetGame } = useGameLogic();

  // Handle Keyboard Input
  const handleKeyDown = useCallback(
    (event) => {
      if (gameState !== "playing") return; // Ignore input if game over

      let moved = false;
      switch (event.key) {
        case "ArrowUp":
          move("up");
          moved = true;
          break;
        case "ArrowDown":
          move("down");
          moved = true;
          break;
        case "ArrowLeft":
          move("left");
          moved = true;
          break;
        case "ArrowRight":
          move("right");
          moved = true;
          break;
        default:
          break;
      }
      // Prevent default arrow key behavior (scrolling)
      if (moved) {
        event.preventDefault();
      }
    },
    [move, gameState]
  );

  // Add event listener for keyboard input
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]); // Re-attach if handleKeyDown changes

  // Optional: Add touch controls (basic swipe detection)
  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    const gameArea = document.querySelector(".board-container"); // Target the board area

    const handleTouchStart = (event) => {
      if (event.touches.length !== 1) return; // Ignore multi-touch
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      // Prevent scrolling while swiping on the game board
      if (event.touches.length === 1) {
        event.preventDefault();
      }
      touchEndX = event.touches[0].clientX;
      touchEndY = event.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (!touchStartX || !touchStartY) return; // Ensure start coords exist

      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);

      const swipeThreshold = 50; // Minimum distance for a swipe

      if (Math.max(absDeltaX, absDeltaY) < swipeThreshold) {
        // Reset and do nothing if swipe is too short
        touchStartX = 0;
        touchStartY = 0;
        touchEndX = 0;
        touchEndY = 0;
        return;
      }

      if (absDeltaX > absDeltaY) {
        // Horizontal swipe
        if (deltaX > 0) {
          move("right");
        } else {
          move("left");
        }
      } else {
        // Vertical swipe
        if (deltaY > 0) {
          move("down");
        } else {
          move("up");
        }
      }

      // Reset touch coordinates
      touchStartX = 0;
      touchStartY = 0;
      touchEndX = 0;
      touchEndY = 0;
    };

    if (gameArea) {
      gameArea.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      }); // Use passive: false if preventDefault is needed
      gameArea.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      }); // Prevent scroll during move
      gameArea.addEventListener("touchend", handleTouchEnd);
    }

    // Cleanup listeners
    return () => {
      if (gameArea) {
        gameArea.removeEventListener("touchstart", handleTouchStart);
        gameArea.removeEventListener("touchmove", handleTouchMove);
        gameArea.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [move]); // Dependency on move function

  return (
    <div className="game-container">
      <Header score={score} onNewGame={resetGame} />
      <div style={{ position: "relative" }}>
        {" "}
        {/* Container for board and overlay */}
        <Board board={board} />
        <GameOverOverlay
          gameState={gameState}
          score={score}
          onRestart={resetGame}
        />
      </div>
    </div>
  );
}

export default App;
