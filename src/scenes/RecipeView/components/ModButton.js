import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  padding: 0.5rem 1rem;
  backgroundcolor: lightgreen;
  border: 0;
  font-size: 1em;
  border: 1px solid #eee;
`;

const ModButton = ({ link }) => (
  <Button>
    <Link to={link}>modify this recipe</Link>
  </Button>
);

export default ModButton;
