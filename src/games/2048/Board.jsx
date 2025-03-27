import React from "react";
import Tile from "./Tile";

const Board = ({ board }) => {
  return (
    <div className="board-container">
      {/* Background Grid Cells */}
      <div className="grid-container">
        {Array.from({ length: 16 }).map((_, index) => (
          <div key={index} className="grid-cell"></div>
        ))}
      </div>

      {/* Tiles */}
      <div className="tile-container">
        {board.map((row, rIndex) =>
          row.map((value, cIndex) => (
            <Tile
              key={`${rIndex}-${cIndex}`}
              value={value}
              row={rIndex}
              col={cIndex}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Board;
