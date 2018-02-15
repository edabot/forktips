import React from "react";
import styled from "styled-components";

const NoteEntry = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: #fafafa;
  input {
    background-color: white;
    width: calc(100% - 50px);
  }
`;

const ignoreEnterKey = e => {
  var keyCode = e.keyCode || e.which;
  if (keyCode === 13) {
    e.preventDefault();
    return false;
  }
};

export default props => (
  <NoteEntry>
    <h2>Title</h2>
    <input
      type="text"
      name="title"
      onKeyDown={ignoreEnterKey}
      onChange={props.handleChange}
      value={props.value}
    />
  </NoteEntry>
);
