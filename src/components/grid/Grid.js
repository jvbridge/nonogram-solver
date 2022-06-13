import React, { useState } from "react";
import Box from "../box/Box";

// rendering functions for the boxes
const createBox = (state) => {
  return <Box state={state} />;
};

const createRow = (stateArr) => {
  const ret = [];
  stateArr.forEach((state) => {
    ret.push(createBox(state));
  });
  return <div className="row">{ret}</div>;
};

const createGrid = (stateArrs) => {
  const ret = [];
  stateArrs.forEach((row) => {
    ret.push(createRow(row));
  });
  return <div className="container">{ret}</div>;
};

/**
 * Creates an x by y grid for solving your nonogram
 * @param {Int} x how wide the grid should be
 * @param {Int} y how tall the grid should be
 */
const createEmptyState = (x, y) => {
  const ret = [];

  for (let i = 0; i < y; i++) {
    const curr = [];
    for (let j = 0; j < x; j++) {
      curr.push("empty");
    }
    ret.push(curr);
  }
  return ret;
};

function Grid(props) {
  // create an empty use state for a 5x5 grid by default
  const [gridState, setGridState] = useState(createEmptyState(5, 5));
  console.log(gridState);

  return createGrid(gridState);
}

export default Grid;
