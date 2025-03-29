import React, { useState, useEffect, useCallback } from "react";
import puzzles from "./puzzles";
import ReactConfetti from "react-confetti";

// get a random solution from the solutions file
const getNewPuzzle = () => {
  const randomIndex = Math.floor(Math.random() * puzzles.length);
  return puzzles[randomIndex];
};

// Helper function to perform calculations
const calculate = (num1, operator, num2) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "×":
      return num1 * num2;
    case "÷":
      if (num2 === 0) {
        return "error"; // Division by zero
      }
      // Check if result is an integer for classic Make 24 rules
      // if (num1 % num2 !== 0) {
      //   return 'error'; // Non-integer result (optional rule)
      // }
      return num1 / num2;
    default:
      return "error"; // Should not happen
  }
};

export const Make24Game = () => {
  // ----- State -----
  const [target] = useState(24);
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

  // Update window size for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ----- Effects -----
  // Initialize game on mount
  useEffect(() => {
    startNewGame();
  }, []); // Empty dependency array ensures this runs only once on mount

  // ----- Callbacks / Handlers -----

  // Function to reset the board and generate new numbers
  const startNewGame = useCallback(() => {
    const puzzle = getNewPuzzle();

    setSolution(puzzle.solutions);
    setInitialNumbers(puzzle.input);
    clearSequence();
    setMessage("Use the 4 numbers to make 24.");
    setAvailableIndices(new Set([0, 1, 2, 3])); // Reset available numbers
    // Ensure initial state is clean even if called multiple times
    setCurrentValue(null);
    setDisplaySequence([]);
    setLastClickedType(null);
    setGameOver(false);
    setShowConfetti(false); // Hide confetti when starting a new game
  }, []); // No dependencies needed

  // Function to clear the current user input sequence but keep the numbers
  const clearSequence = useCallback(() => {
    setCurrentValue(null);
    setDisplaySequence([]);
    setLastClickedType(null);
    setAvailableIndices(new Set([0, 1, 2, 3])); // Make all numbers available again
    setMessage("Sequence cleared. Start again.");
    setGameOver(false);
    setShowConfetti(false); // Hide confetti when clearing
  }, []);

  // Handle clicking a number button
  const handleNumberClick = useCallback(
    (numValue, index) => {
      if (gameOver || !availableIndices.has(index)) {
        return; // Ignore click if game over or number already used
      }

      // Prevent clicking number right after another number
      if (lastClickedType === "number") {
        setMessage("Select an operator first.");
        return;
      }

      const newSequence = [...displaySequence, numValue];
      setDisplaySequence(newSequence);
      setAvailableIndices((prev) => {
        const next = new Set(prev);
        next.delete(index);
        return next;
      });

      let nextValue;
      let calculationError = false;

      if (currentValue === null) {
        // This is the first number clicked in the sequence
        nextValue = numValue;
      } else {
        // An operator must have been the last click
        const lastOperator = displaySequence[displaySequence.length - 1]; // The operator just before this number
        const result = calculate(currentValue, lastOperator, numValue);

        if (result === "error") {
          setMessage(
            "Invalid operation (e.g., division by zero). Sequence cleared."
          );
          calculationError = true;
          // Reset sequence on error
          setCurrentValue(null);
          setDisplaySequence([]);
          setLastClickedType(null);
          setAvailableIndices(new Set([0, 1, 2, 3]));
          setGameOver(true); // Mark as game over due to error
          return; // Stop further processing for this click
        } else {
          nextValue = result;
        }
      }

      setCurrentValue(nextValue);
      setLastClickedType("number");
      setMessage("Number selected. Choose an operator or check result.");

      // Check for win condition immediately after a calculation completes
      // Win condition: all numbers used and result is 24
      const allNumbersUsed = availableIndices.size === 1; // It will be 1 because we just removed one, check if only 1 remains before this update

      // Check win condition AFTER state updates might settle
      // Use the size of the *newly updated* availableIndices
      if (availableIndices.size === 1 && nextValue === target) {
        // Check size should be 0 AFTER deletion
        // Correction: Check size after the state update cycle. Let's use a check based on the sequence length
        const numbersInSequence = newSequence.filter(
          (item) => typeof item === "number"
        ).length;
        if (numbersInSequence === 4 && nextValue === target) {
          setMessage(`Success! ${newSequence.join(" ")} = ${target}`);
          setGameOver(true);
          setShowConfetti(true); // Trigger confetti on win
        } else if (numbersInSequence === 4 && nextValue !== target) {
          setMessage(`Result is ${nextValue}, not ${target}. Try again!`);
          // Optionally reset automatically or let user clear/retry
          // clearSequence(); // Example: Auto-clear on incorrect final result
        }
      }
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

      <div className="padding ">
        <h2 className="">Make {target} Game</h2>
        {/* <h6 className="">{message}</h6> */}
      </div>

      {/* Display Current Calculation */}
      <div className="padding">
        <div className="row center-align ">
          <div className="row">
            {displaySequence.map((item, index) => (
              <span>
                <h3>{item}</h3>
              </span>
            ))}
            <span>
              <h3> = {currentValue}</h3>{" "}
            </span>
          </div>
        </div>
      </div>

      {/* Number Buttons */}
      <div className="padding">
        <div className="row center-align">
          {initialNumbers.map((num, index) => (
            <button
              className="large"
              onClick={() => handleNumberClick(num, index)}
              disabled={
                !availableIndices.has(index) ||
                lastClickedType === "number" ||
                gameOver
              }
            >
              <h5> {num}</h5>
            </button>
          ))}
        </div>
      </div>

      {/* Operator Buttons */}
      <div className="padding">
        <div className="row center-align">
          {["+", "-", "×", "÷"].map((op) => (
            <button
              className="large"
              onClick={() => handleOperatorClick(op)}
              disabled={
                lastClickedType !== "number" ||
                gameOver ||
                availableIndices.size === 0
              }
            >
              <h3>{op}</h3>
            </button>
          ))}
        </div>
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
            <span>Clear Sequence</span>
          </button>

          <button
            className="small-round green white-text "
            onClick={startNewGame}
          >
            <i>refresh</i>
            <span>New Game</span>
          </button>
          <button
            className="chip circle"
            onClick={() => setShowConfetti((prev) => !prev)} // For testing
            // style={{ display: "none" }} // Hide for production
          >
            <i>help</i>
            <div className="tooltip right">{solution}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

// Export the component for use in other files
export default Make24Game;

// Note: To use this in an existing application:
// 1. Make sure React and BeerCSS are installed and setup.
// 2. Save this entire code block as a .jsx file (e.g., Make24Game.jsx).
// 3. Import it into your target component: `import Make24Game from './Make24Game';`
// 4. Render it where desired: `<Make24Game />`
