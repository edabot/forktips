import React from "react";

const IngredientsStyles = {
  fontSize: "1rem",
  color: "#333",
  backgroundColor: "#f8f8f8",
  marginBottom: "1rem"
};
export default ({ ingredients }) => (
  <div style={IngredientsStyles}>{ingredients}</div>
);
