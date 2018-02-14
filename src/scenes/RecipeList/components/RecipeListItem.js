import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Item = styled.div`
  a {
    color: blue;
  }
`;

const RecipeListItem = ({ recipe }) => (
  <Item>
    <Link to={`/${recipe.id}`}>{recipe.title}</Link>
  </Item>
);

export default RecipeListItem;
