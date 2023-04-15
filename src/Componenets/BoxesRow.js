import React from "react";
import Box from "./Box";

const BoxesRow = ({ count }) => {
  const boxes = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div className="row">
      {boxes.map((box) => (
        <Box key={box} />
      ))}
    </div>
  );
};

export default BoxesRow;
