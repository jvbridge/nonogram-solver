import React, { useState } from "react";
import Box from "../box/Box";

function Grid(props) {
  // rendering functions for the boxes

  /**
   * Creates a box element with the state given
   * @param {String} state
   * @returns {Box}
   */
  const createBox = (state, x, y) => {
    const key = `x: ${x}, y: ${y}`;
    return <Box key={key} onClick={() => cycleBoxState(x, y)} state={state} />;
  };

  /**
   * Creates a row of boxes
   * @param {String[]} stateArr
   * @param {Int} rowNumber
   * @returns
   */
  const createRow = (stateArr, rowNumber) => {
    const ret = [];
    stateArr.forEach((state, index) => {
      ret.push(createBox(state, index, rowNumber));
    });
    const key = "rowNumber: " + rowNumber;
    return (
      <div key={key} className="row">
        {ret}
      </div>
    );
  };

  const createGrid = (stateArrs) => {
    const ret = [];
    stateArrs.forEach((row, index) => {
      ret.push(createRow(row, index));
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

  // create an empty use state for a 5x5 grid by default
  const [gridState, setGridState] = useState(createEmptyState(5, 5));

  /**
   * cycles the state of the button at the given coordinates
   * @param {Int} x x-index of the button to cycle
   * @param {Int} y y-index of the button to cycle
   */
  const cycleBoxState = (x, y) => {
    // get the current state of the button
    const currState = gridState[x][y];
    let newState;
    switch (currState) {
      case "empty":
        newState = "no";
        break;
      case "no":
        newState = "block";
        break;
      case "block":
        newState = "empty";
        break;
      default:
        throw new Error("Invalid state for block");
    }
    let newGrid = gridState;
    newGrid[x][y] = newState;
    console.log("setting new gridState: ", newGrid);
    setGridState(newGrid);
  };

  return createGrid(gridState);
}

export default Grid;
