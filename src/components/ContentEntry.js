import React from "react";
import styled from "styled-components";
import Textarea from "react-textarea-autosize";

const ContentEntry = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: #fafafa;
  border: 0;
  textarea {
    padding: 1rem;
    background-color: white;
    font-size: 1rem;
    width: calc(100% - 50px);
    border: 0;
  }
`;

export default props => (
  <ContentEntry>
    <h2>{props.h2}</h2>
    <Textarea
      rows={4}
      type="text"
      name={props.type}
      onChange={props.handleChange}
      value={props.value}
    />
  </ContentEntry>
);
