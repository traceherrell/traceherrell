import React, { useState, useEffect, useCallback } from "react";
import puzzles from "./puzzles";
import ReactConfetti from "react-confetti";

const MULTIPLY = "×";
const DEVIDE = "÷";
const ADD = "+";
const SUBTRACT = "-";

// get a random solution from the solutions file
const getNewPuzzle = () => {
  const randomIndex = Math.floor(Math.random() * puzzles.length);
  return puzzles[randomIndex];
};

// Helper function to perform calculations
const calculate = (num1, operator, num2) => {
  switch (operator) {
    case ADD:
      return num1 + num2;
    case SUBTRACT:
      return num1 - num2;
    case MULTIPLY:
      return num1 * num2;
    case DEVIDE:
      if (num2 === 0) {
        return "error"; // Division by zero
      }

      return num1 / num2;
    default:
      return "error"; // Should not happen
  }
};

export const Make24Game = () => {
  // ----- State -----
  const [target] = useState(24);
  const [total, setTotal] = useState(null); // The total of the current round
  const [initialNumbers, setInitialNumbers] = useState([]); // The 4 numbers for the round
  const [solution, setSolution] = useState([]); // The solution to the current round
  const [availableIndices, setAvailableIndices] = useState(
    new Set([0, 1, 2, 3])
  ); // Indices of unused numbers
  const [currentValue, setCurrentValue] = useState(null); // The running total
  const [displaySequence, setDisplaySequence] = useState([]); // User's input: ['5', '+', '3', ...]
  const [lastClickedType, setLastClickedType] = useState(null); // 'number' | 'operator' | null
  const [message, setMessage] = useState("Select your first number."); // User feedback
  const [gameOver, setGameOver] = useState(false); // Tracks if the current attempt is finished (win/error)
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const calculateTotal = () => {
    let result = null; // Initialize result to null
    if (displaySequence.length === 0) {
      setTotal(0);
      return;
    }

    if (displaySequence.length === 3) {
      setTotal(
        calculate(displaySequence[0], displaySequence[1], displaySequence[2])
      );
      return;
    }

    if (displaySequence.length === 5) {
      const first = calculate(
        displaySequence[0],
        displaySequence[1],
        displaySequence[2]
      );
      const second = calculate(first, displaySequence[3], displaySequence[4]);
      setTotal(second);
      return;
    }
    if (displaySequence.length === 7) {
      const first = calculate(
        displaySequence[0],
        displaySequence[1],
        displaySequence[2]
      );
      const second = calculate(first, displaySequence[3], displaySequence[4]);
      const third = calculate(second, displaySequence[5], displaySequence[6]);
      if (
        third !== target &&
        (displaySequence[3] === MULTIPLY || displaySequence[5] === DEVIDE)
      ) {
        // try to add the right side first
        const rightSide = calculate(
          displaySequence[4],
          displaySequence[5],
          displaySequence[6]
        );
        result = calculate(first, displaySequence[3], rightSide);
      } else {
        result = third;
      }

      // Check if the result is equal to the target
      if (result === target) {
        setGameOver(true);
        setMessage("You made 24! Click refresh to play again.");
        setShowConfetti(true); // Show confetti on win
      } else {
        setMessage("-- 😒 --");
      }
      setTotal(result); // Update total with the calculated result
    }
  };

  useEffect(() => {
    startNewGame();
  }, []);
  useEffect(() => {
    calculateTotal();
  }, [displaySequence]); // Recalculate total when displaySequence changes

  // Function to reset the board and generate new numbers
  const startNewGame = () => {
    clearSequence();
    const puzzle = getNewPuzzle(); // Get a new puzzle
    setSolution(puzzle.solutions);
    setInitialNumbers(puzzle.input);

    setMessage("Use the 4 numbers to make 24.");
  };

  const clearSequence = () => {
    setTotal(0);
    setDisplaySequence([]);
    setLastClickedType(null);
    setGameOver(false);
    setShowConfetti(false); // Hide confetti when starting a new game
    setCurrentValue(null);
    setAvailableIndices(new Set([0, 1, 2, 3])); // Make all numbers available again
  };

  // Handle clicking a number button
  const handleNumberClick = useCallback(
    (index) => {
      if (gameOver || !availableIndices.has(index)) {
        return; // Ignore click if game over or number already used
      }

      // Prevent clicking number right after another number
      if (lastClickedType === "number") {
        setMessage("Select an operator first.");
        return;
      }
      const numValue = initialNumbers[index];

      const newSequence = [...displaySequence, numValue];
      setDisplaySequence(newSequence);
      setAvailableIndices((prev) => {
        const next = new Set(prev);
        next.delete(index);
        return next;
      });

      setLastClickedType("number");
      setMessage("Number selected. Choose an operator.");

      setCurrentValue(numValue); // Update current value with the selected number
    },
    [
      gameOver,
      availableIndices,
      lastClickedType,
      currentValue,
      displaySequence,
      target,
      clearSequence,
    ]
  );

  // Handle clicking an operator button
  const handleOperatorClick = useCallback(
    (operator) => {
      if (gameOver) return; // Ignore click if game over

      // Must have clicked a number last
      if (lastClickedType !== "number" || currentValue === null) {
        setMessage("Select a number first.");
        return;
      }

      // Cannot click operator if all numbers are used
      if (availableIndices.size === 0) {
        setMessage("All numbers used. Check result or clear.");
        return;
      }

      setDisplaySequence((prev) => [...prev, operator]);
      setLastClickedType("operator");
      setMessage("Operator selected. Choose the next number.");
    },
    [gameOver, lastClickedType, currentValue, availableIndices.size]
  );
  const OpButton = ({ op }) => {
    return (
      <button
        className="small"
        onClick={() => handleOperatorClick(op)}
        disabled={
          lastClickedType !== "number" ||
          gameOver ||
          availableIndices.size === 0
        }
      >
        <h3>{op}</h3>
      </button>
    );
  };

  const NumButton = ({ index }) => {
    return (
      <button
        className="large "
        onClick={() => handleNumberClick(index)}
        disabled={
          !availableIndices.has(index) ||
          lastClickedType === "number" ||
          gameOver
        }
      >
        <h5> {initialNumbers[index]}</h5>
      </button>
    );
  };
  // ----- Render -----
  return (
    <div className="center-align">
      {/* Confetti component */}
      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.2}
        />
      )}

      <div className="center-align">
        <h2 className="">Make {target}</h2>
        <p className="">{message}</p>
      </div>

      {/* Display Current Calculation */}
      <div className="padding">
        <div className="row center-align ">
          <div className="row">
            {displaySequence.map((item, index) => (
              <span key={index}>
                <h5>{item}</h5>
              </span>
            ))}
            <span>
              <h5> = {total}</h5>{" "}
            </span>
          </div>
        </div>
      </div>

      {/* Number Buttons */}
      <div className="row center-align ">
        <NumButton index={0} />
        <NumButton index={1} />
      </div>
      <div className="row center-align">
        <NumButton index={2} />
        <NumButton index={3} />
      </div>

      <div className="small-space"> </div>
      {/* Operator Buttons */}

      <div className="row  center-align">
        <OpButton op={ADD} />
        <OpButton op={SUBTRACT} />
      </div>
      <div className="row  center-align">
        <OpButton op={MULTIPLY} />
        <OpButton op={DEVIDE} />
      </div>

      {/* Control Buttons */}
      <div className="large-space"></div>
      <div className="padding ">
        <div className="row center-align">
          <button
            className="small-round error white-text"
            onClick={clearSequence}
            disabled={displaySequence.length === 0 && !gameOver}
          >
            <i>backspace</i>
          </button>

          <button
            className="small-round green white-text "
            onClick={startNewGame}
          >
            <i>refresh</i>
          </button>
        </div>
      </div>
      <div className="white-text">{solution}</div>
    </div>
  );
};

export default Make24Game;
