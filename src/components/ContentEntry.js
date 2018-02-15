import React from "react";
import styled from "styled-components";

const ContentEntry = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: #fafafa;
  input {
    background-color: white;
  }
`;

export default props => (
  <ContentEntry>
    <h2>{props.h2}</h2>
    <textarea
      type="text"
      name={props.type}
      onChange={props.handleChange}
      value={props.value}
    />
  </ContentEntry>
);
