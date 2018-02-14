import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  padding: 0.5rem 1rem;
  backgroundcolor: lightgreen;
  border: 0;
  font-size: 1em;
  margin-right: 1rem;
  border: 1px solid #eee;
  transition: all 0.2s;
  &:hover {
    border: 1px solid #b6300b;
    a {
      color: #b6300b;
    }
  }
`;

export default ({ link }) => (
  <Button>
    <Link to={link}>edit</Link>
  </Button>
);
