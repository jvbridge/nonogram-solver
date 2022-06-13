import React from 'react';
import Box from '../box/Box';

// rendering functions for the boxes
const createBox = (state) => {
  return <Box state="state" />;
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

function Grid(props) {
  return (
    <div className="container">
      <div className="row">
        <Box state="empty" />
        <Box state="empty" />
        <Box state="empty" />
        <Box state="empty" />
        <Box state="empty" />
      </div>
      <div className="row">
        <Box state="empty" />
        <Box state="empty" />
        <Box state="empty" />
        <Box state="empty" />
        <Box state="empty" />
      </div>
      <div className="row">
        <Box state="empty" />
        <Box state="empty" />
        <Box state="empty" />
        <Box state="empty" />
        <Box state="empty" />
      </div>
      <div className="row">
        <Box state="empty" />
        <Box state="empty" />
        <Box state="empty" />
        <Box state="empty" />
        <Box state="empty" />
      </div>
      <div className="row">
        <Box state="empty" />
        <Box state="empty" />
        <Box state="empty" />
        <Box state="empty" />
        <Box state="empty" />
      </div>
    </div>
  );
}

export default Grid;
