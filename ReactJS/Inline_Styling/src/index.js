import React from "react";
import ReactDOM from "react-dom";

// we must create javascript object for inline styling
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

// we updated the color property value
customStyle.color = "blue";

ReactDOM.render(
  // we pass above javascipt object as value to style property
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
