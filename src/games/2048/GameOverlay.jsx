import React from "react";

const GameOverOverlay = ({ gameState, score, onRestart }) => {
  if (gameState === "playing") {
    return null;
  }

  const message = gameState === "won" ? "You Win!" : "Game Over!";

  return (
    <div className="game-over-overlay">
      <p className="game-over-message">{message}</p>
      <p>Your Score: {score}</p>
      <button className="new-game-button" onClick={onRestart}>
        {gameState === "won" ? "Play Again" : "Try Again"}
      </button>
    </div>
  );
};

export default GameOverOverlay;
