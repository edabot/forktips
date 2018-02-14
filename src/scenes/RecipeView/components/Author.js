import React from 'react';
import styled from 'styled-components';

const Author = styled.div`
  font-size: 0.8rem;
  color: #666;
`;
export default ({ author }) => <Author>Author: {author}</Author>;
