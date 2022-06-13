import React from "react";

function Box({ state, onClick }) {
  let emoji;
  switch (state) {
    case "empty":
      emoji = "⬜";
      break;
    case "no":
      emoji = "❎";
      break;
    case "block":
      emoji = "⬛";
      break;
    default:
      throw new Error("no state passed in");
  }

  return <button onClick={onClick}>{emoji}</button>;
}

export default Box;
