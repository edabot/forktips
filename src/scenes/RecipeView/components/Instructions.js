import React from 'react';
import styled from 'styled-components';

const Instructions = styled.div`
  font-size: 1rem;
  color: #333;
  background-color: #f8f8f8;
  margin-bottom: 2rem;
`;

export default ({ instructions }) => (
  <Instructions>{instructions}</Instructions>
);
