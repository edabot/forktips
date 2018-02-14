import React from 'react';
import styled from 'styled-components';

const NewRecipeButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: white;
  border: 1px solid lightgreen;
  color: lightgreen;
  border-radius: 5px;
  max-width: 200px;
  margin: 0 auto;
  transition: all 0.2s;
  margin-right: 1rem;
  &:hover {
    color: white;
    background-color: lightgreen;
  }
`;

export default () => <NewRecipeButton>+ new recipe</NewRecipeButton>;
