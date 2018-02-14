import React from 'react';
import styled from 'styled-components';

const Ingredients = styled.div`
  font-size: 1rem;
  color: #333;
  background-color: #f8f8f8;
  margin-bottom: 1rem;
`;

export default ({ ingredients }) => <Ingredients>{ingredients}</Ingredients>;
