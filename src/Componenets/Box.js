// src/components/Box.js
import React, { useState } from "react";

const Box = () => {
  const [isGreen, setIsGreen] = useState(false);

  const handleClick = () => {
    setIsGreen((prevIsGreen) => !prevIsGreen);
  };

  return (
    <div className={`box ${isGreen ? "green" : ""}`} onClick={handleClick} />
  );
};

export default Box;
