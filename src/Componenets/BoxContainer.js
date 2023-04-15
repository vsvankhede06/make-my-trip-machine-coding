import React from "react";
import BoxesRow from "./BoxesRow";

const BoxesContainer = () => {
  return (
    <div className="container">
      <BoxesRow count={3} />
      <BoxesRow count={1} />
      <BoxesRow count={3} />
    </div>
  );
};

export default BoxesContainer;
