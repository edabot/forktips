import React from "react";

const InstructionsStyles = {
  fontSize: "1rem",
  color: "#333",
  backgroundColor: "#f8f8f8"
};

export default ({ instructions }) => (
  <div style={InstructionsStyles}>{instructions}</div>
);
