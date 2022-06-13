import React from 'react';
import Box from '../box/Box';

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
