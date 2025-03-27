import React from "react";

const Header = ({ score, onNewGame }) => {
  return (
    <div className="header">
      <h1>2048</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <div className="score-container">
          <span className="score-label">SCORE</span>
          {score}
        </div>
        <button className="new-game-button" onClick={onNewGame}>
          New Game
        </button>
      </div>
    </div>
  );
};

export default Header;
