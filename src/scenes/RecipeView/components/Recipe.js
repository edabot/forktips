import React from 'react';
import Author from './Author';
import Title from './Title';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Recipe = ({ recipe }) => (
  <div className="recipe">
    <FlexRow>
      <Title title={recipe.title} />
      <Author author={recipe.author} />
    </FlexRow>
    <Ingredients ingredients={recipe.ingredients} />
    <Instructions instructions={recipe.instructions} />
  </div>
);

export default Recipe;
