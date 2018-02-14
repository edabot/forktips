import React from "react";
import Author from "./Author";
import Title from "./Title";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

const FlexRow = {
  display: "flex",
  justifyContent: "space-between"
};

const Recipe = ({ recipe }) => (
  <div className="recipe">
    <div style={FlexRow}>
      <Title title={recipe.title} />
      <Author author={recipe.author} />
    </div>
    <Ingredients ingredients={recipe.ingredients} />
    <Instructions instructions={recipe.instructions} />
  </div>
);

export default Recipe;
