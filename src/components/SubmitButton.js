import React from "react";
import styled from "styled-components";

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: white;
  border: 1px solid #b6300b;
  color: #b6300b;
  border-radius: 5px;
  max-width: 200px;
  margin: 2rem auto;
  transition: all 0.2s;
  &:hover {
    color: white;
    background-color: #b6300b;
  }
`;

export default () => <SubmitButton>submit</SubmitButton>;
