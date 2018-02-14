import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

import Recipe from "../scenes/Recipe/components/Recipe";

const recipe = {
  title: "pancakes",
  author: "tom",
  ingredients:
    "3/4 cup granulated sugar 3/4 cup packed brown sugar 1 cup butter or margarine, softened 1 teaspoon vanilla 1 egg 2 1/4 cups Gold Medal™ all-purpose flour 1 teaspoon baking soda 1/2 teaspoon salt 1 cup coarsely chopped nuts 1 package (12 ounces) semisweet chocolate chips (2 cups)",
  instructions: "do it"
};

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ));

storiesOf("Recipe", module).add("recipe", () => <Recipe recipe={recipe} />);
