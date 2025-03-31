import React, { useState, useEffect, useCallback } from "react";
import puzzles from "./puzzles";
import ReactConfetti from "react-confetti";
import solutions from "./puzzles";

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
const defaultBox = {
  initNum: 0,
  currentNum: 0,
  isSelected: false,
  isUsed: false,
};

export const Make24Game = () => {
  // ----- State -----
  const [target] = useState(24);
  const [total, setTotal] = useState(null); // The total of the current round
  const [puzzle, setPuzzle] = useState({ input: [0, 0, 0, 0], solutions: [] }); // The 4 numbers for the round
  const [boxes, setBoxes] = useState([]); // The boxes for the numbers
  const [selectedBoxIndex, setSelectedBoxIndex] = useState(null); // The index of the selected box
  const history = []; // History of the game
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

  // const calculateTotal = () => {
  //   let result = null; // Initialize result to null
  //   if (displaySequence.length === 0) {
  //     setTotal(0);
  //     return;
  //   }

  //   if (displaySequence.length === 3) {
  //     setTotal(
  //       calculate(displaySequence[0], displaySequence[1], displaySequence[2])
  //     );
  //     return;
  //   }

  //   if (displaySequence.length === 5) {
  //     const first = calculate(
  //       displaySequence[0],
  //       displaySequence[1],
  //       displaySequence[2]
  //     );
  //     const second = calculate(first, displaySequence[3], displaySequence[4]);
  //     setTotal(second);
  //     return;
  //   }
  //   if (displaySequence.length === 7) {
  //     const first = calculate(
  //       displaySequence[0],
  //       displaySequence[1],
  //       displaySequence[2]
  //     );
  //     const second = calculate(first, displaySequence[3], displaySequence[4]);
  //     const third = calculate(second, displaySequence[5], displaySequence[6]);
  //     if (
  //       third !== target &&
  //       (displaySequence[3] === MULTIPLY || displaySequence[5] === DEVIDE)
  //     ) {
  //       // try to add the right side first
  //       const rightSide = calculate(
  //         displaySequence[4],
  //         displaySequence[5],
  //         displaySequence[6]
  //       );
  //       result = calculate(first, displaySequence[3], rightSide);
  //     } else {
  //       result = third;
  //     }

  //     // Check if the result is equal to the target
  //     if (result === target) {
  //       setGameOver(true);
  //       setMessage("You made 24! Click refresh to play again.");
  //       setShowConfetti(true); // Show confetti on win
  //     } else {
  //       setMessage("-- 😒 --");
  //     }
  //     setTotal(result); // Update total with the calculated result
  //   }
  // };

  useEffect(() => {
    startNewGame();
  }, []);
  // useEffect(() => {
  //   calculateTotal();
  // }, [displaySequence]); // Recalculate total when displaySequence changes

  // Function to reset the board and generate new numbers
  const startNewGame = () => {
    const newPuzzle = getNewPuzzle(); // Get a new puzzle
    setPuzzle(newPuzzle); // Get a new puzzle
    setSolution(newPuzzle.solutions);
    setBoxes([
      { ...defaultBox, initNum: newPuzzle.input[0] },
      { ...defaultBox, initNum: newPuzzle.input[1] },
      { ...defaultBox, initNum: newPuzzle.input[2] },
      { ...defaultBox, initNum: newPuzzle.input[3] },
    ]); // Set the boxes with the new numbers
    setTotal(0); // Reset the total
    clearSequence();
  };

  const clearSequence = () => {
    setTotal(0);
    setBoxes([
      {
        ...defaultBox,
        initNum: puzzle.input[0],
        currentNum: puzzle.input[0],
      },
      {
        ...defaultBox,
        initNum: puzzle.input[1],
        currentNum: puzzle.input[1],
      },
      {
        ...defaultBox,
        initNum: puzzle.input[2],
        currentNum: puzzle.input[2],
      },
      {
        ...defaultBox,
        initNum: puzzle.input[3],
        currentNum: puzzle.input[3],
      },
    ]);
    setDisplaySequence([]);
    setLastClickedType(null);
    setGameOver(false);
    setShowConfetti(false); // Hide confetti when starting a new game
    setCurrentValue(null);
    setAvailableIndices(new Set([0, 1, 2, 3])); // Make all numbers available again
    setMessage("Select your first number.");
    setSelectedBoxIndex(null); // Reset selected box index
  };

  // Handle clicking a number button
  const handleNumberClick = useCallback(
    (index) => {
      let newSequence = [];

      console.log("index", index);
      const numValue = currentNumbers[index]; // Get the number value
      console.log("numValue", numValue);
      if (displaySequence.length === 2) {
        newSequence = [...displaySequence, numValue]; // Add the number to the sequence
      } else {
        newSequence = [numValue];
        setTotal(null); // Start a new sequence with the number
      }
      setDisplaySequence(newSequence);
      setLastClickedType("number");

      // calulate total
      if (newSequence.length === 3) {
        const first = calculate(newSequence[0], newSequence[1], newSequence[2]);
        console.log("first", first);
        setCurrentValue(first);
        setTotal(first);
        //swap
        // find the index of the first number in the sequence
        const firstIndex = currentNumbers.indexOf(newSequence[0]);
        // find the index of the second number in the sequence
        const secondIndex = currentNumbers.indexOf(newSequence[2]);
        // set first number to null
        currentNumbers[firstIndex] = null;
        // set the second number to first
        currentNumbers[secondIndex] = first;
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
  const handleBoxClick = (index) => {
    if (selectedBoxIndex === index) {
      console.log("same box", index);
      return;
    }
    boxes[index].isSelected = true; // Mark the box as selected

    setBoxes([...boxes]); // Update the boxes state
    console.log("selectedBoxIndex", selectedBoxIndex);
    console.log("index", index);
    if (selectedBoxIndex == null) {
      console.log("first click", index);
      setSelectedBoxIndex(index); // Set the selected box index
      setDisplaySequence([boxes[index].currentNum]); // Set the display sequence to the selected number
      setCurrentValue(boxes[index].currentNum); // Set the current value to the selected number
      setLastClickedType("number"); // Set the last clicked type to number
      setMessage("Number selected. Choose an operator."); // Update the message
      return;
    }

    console.log("second click", index);
    setDisplaySequence((prev) => {
      const newSequence = [...prev]; // Create a new sequence array
      newSequence.push(boxes[index].currentNum); // Add the selected number to the sequence
      return newSequence; // Return the new sequence
    });
    let total = calculate(
      displaySequence[0],
      displaySequence[1],
      boxes[index].currentNum
    ); // Calculate the total
    setTotal(total); // Update the total state
    setCurrentValue(total); // Update the current value state
    setLastClickedType("number"); // Set the last clicked type to number

    // If the user clicks a different box, update the current value and display sequence
    const selectedBox = boxes[selectedBoxIndex]; // Get the previously selected box
    const newBox = boxes[index]; // Get the newly selected box
    newBox.isSelected = true; // Mark the new box as selected
    selectedBox.isSelected = false; // Mark the previous box as unselected
    selectedBox.isUsed = true; // Mark the previous box as used
    newBox.currentNum = total; // Update the new box with the current value
    setBoxes([...boxes]); // Update the boxes state
    setDisplaySequence([]);
    setSelectedBoxIndex(index); // Set the selected box index to the new box
    setMessage("Number selected. Choose an operator."); // Update the message
  };
  // Handle clicking an operator button
  const handleOperatorClick = (operator) => {
    if (gameOver) return; // Ignore click if game over

    // Must have clicked a number last
    if (lastClickedType !== "number") {
      setMessage("Select a number first.");
      return;
    }

    if (displaySequence.length === 0 && selectedBoxIndex != null) {
      setDisplaySequence([boxes[selectedBoxIndex].currentNum, operator]); // Set the display sequence to the selected number
    }
    if (displaySequence.length === 1) {
      setDisplaySequence((prev) => {
        const newSequence = [...prev]; // Create a new sequence array
        newSequence.push(operator); // Add the operator to the sequence
        return newSequence; // Return the new sequence
      });
    }

    setLastClickedType("operator");
    setMessage("Operator selected. Choose the next number.");
  };

  const OpButton = ({ op }) => {
    return (
      <button
        className="small"
        onClick={() => handleOperatorClick(op)}
        disabled={lastClickedType !== "number" || gameOver}
      >
        <h3>{op}</h3>
      </button>
    );
  };

  const NumButton = ({ index }) => {
    return (
      <button
        className={`large ${boxes[index]?.isSelected ? "secondary" : ""} ${
          boxes[index]?.isUsed === true ? "hide" : "show"
        }`}
        onClick={() => handleBoxClick(index)}
      >
        <h5> {boxes[index]?.currentNum}</h5>
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
