import React, { useState, useReducer } from "react";
import Box from "../box/Box";

const DEFAULT_SIZE_X = 5;
const DEFAULT_SIZE_Y = 5;
const DEFAULT_BOX_STATE = "empty";

function Grid(props) {
  // rendering functions for the boxes

  /**
   * Creates a box element with the state given
   * @param {String} state
   * @returns {Box}
   */
  const createBox = (state, x, y) => {
    const key = `x: ${x}, y: ${y}`;
    return (
      <Box
        key={key}
        onClick={() =>
          setGridRender({
            type: "cycleBox",
            payload: { x, y },
          })
        }
        state={state}
      />
    );
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
    console.log("creating new grid");
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
  const createGridState = (x, y) => {
    const ret = [];

    for (let i = 0; i < y; i++) {
      const curr = [];
      for (let j = 0; j < x; j++) {
        curr.push(DEFAULT_BOX_STATE);
      }
      ret.push(curr);
    }
    return ret;
  };

  /**
   * cycles the state of the button at the given coordinates
   * @param {Int} x x-index of the button to cycle
   * @param {Int} y y-index of the button to cycle
   */
  const cycleBoxState = (x, y, state) => {
    // get the current state of the button
    const currState = state[y][x];
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
    let newGrid = state;
    newGrid[y][x] = newState;
    return;
  };

  // create an empty use state for a 5x5 grid by default
  const [gridState, setGridState] = useState(
    createGridState(DEFAULT_SIZE_X, DEFAULT_SIZE_Y)
  );

  const initGridState = () => {
    return createGrid(createGridState(DEFAULT_SIZE_X, DEFAULT_SIZE_Y));
  };

  function reducer(state, action) {
    switch (action.type) {
      case "cycleBox":
        console.log("cycling the box");
        const { x, y } = action.payload;
        console.log(`x: ${x}, y: ${y}, state: ${gridState}`);
        const newState = cycleBoxState(x, y, gridState);
        setGridState(newState);
        return createGrid(gridState);
      case "overWrite":
        return createGrid(action.payload);
      default:
        throw new Error("invalid reducer type");
    }
  }

  const [gridRender, setGridRender] = useReducer(
    reducer,
    createGridState(DEFAULT_SIZE_X, DEFAULT_SIZE_Y),
    initGridState
  );
  // make sure we update the grid state
  return <div>{gridRender}</div>;
}

export default Grid;
