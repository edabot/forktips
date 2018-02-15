import React from 'react';
import styled from 'styled-components';

const TitleEntry = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: #fafafa;
  input {
    border: 0;
    padding: 0.5rem;
    font-size: 1.2rem;
    background-color: white;
    width: calc(100% - 50px);
  }
`;

const ignoreKeyDown = e => {
  var keyCode = e.keyCode || e.which;
  if (keyCode === 13) {
    e.preventDefault();
    return false;
  }
};

export default props => (
  <TitleEntry>
    <h2>Title</h2>
    <input
      type="text"
      name="title"
      onKeyDown={ignoreKeyDown}
      onChange={props.handleChange}
      value={props.value}
    />
  </TitleEntry>
);
