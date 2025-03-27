import React from "react";

const Tile = ({ value, row, col }) => {
  if (value === 0) {
    return null; // Don't render empty tiles
  }

  // Determine tile style based on value
  let className = `tile tile-${value}`;
  if (value > 2048) {
    className = "tile tile-super"; // Style for tiles > 2048
  }

  // Inline style for positioning
  const style = {
    "--row": row,
    "--col": col,
  };

  return (
    <div className={className} style={style}>
      {value}
    </div>
  );
};

export default React.memo(Tile); // Memoize to prevent unnecessary re-renders
