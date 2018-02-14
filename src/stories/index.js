import React from 'react';
import '../index.css';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Recipe from '../scenes/RecipeView/components/Recipe';
import ModButton from '../scenes/RecipeView/components/ModButton';
import SubmitButton from '../components/SubmitButton';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const recipe = {
  title: 'pancakes',
  author: 'tom',
  ingredients:
    '3/4 cup granulated sugar\n3/4 cup packed brown sugar \n1 cup butter or margarine, softened \n1 teaspoon vanilla \n1 egg \n2 1/4 cups Gold Medal™ all-purpose flour \n1 teaspoon baking soda \n1/2 teaspoon salt \n1 cup coarsely chopped nuts \n1 package (12 ounces) semisweet chocolate chips (2 cups)',
  instructions: 'do it'
};

storiesOf('Button', module)
  .add('with some emoji', () => (
    <Router>
      <ModButton link="http://google.com" />
    </Router>
  ))
  .add('submit button', () => <SubmitButton />);

storiesOf('Recipe', module).add('recipe', () => <Recipe recipe={recipe} />);
