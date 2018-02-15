import React from "react";
import styled from "styled-components";

const Ingredients = styled.div`
  font-size: 1rem;
  color: #333;
  background-color: #f8f8f8;
  margin-bottom: 1rem;
  padding: 1rem;
  ul {
    list-style: none;
    li:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`;

export default ({ ingredients }) => (
  <Ingredients>
    <ul>
      {ingredients
        .split("\n")
        .map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </Ingredients>
);
