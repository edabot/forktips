import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NewRecipeButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: white;
  border: 1px solid lightgreen;
  border-radius: 5px;
  max-width: 200px;
  margin: 0 auto;
  transition: all 0.2s;
  margin-right: 1rem;
  &:hover {
    background-color: lightgreen;
  }
  a {
    color: lightgreen;
    &:hover {
      color: white;
    }
  }
`;

export default () => (
  <NewRecipeButton>
    <Link to="/new">+ new recipe</Link>
  </NewRecipeButton>
);
