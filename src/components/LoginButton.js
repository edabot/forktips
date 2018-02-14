import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 0;
  cursor: pointer;
  height: 100%;
  padding: 0.5rem 1rem;
`;
const LogInButton = Button.extend`
  color: orangered;
  border: 1px solid orangered;
`;
const LogOutButton = Button.extend`
  color: lightgray;
`;

const Login = props => (
  <div>
    {!props.loggedIn ? (
      <LogInButton onClick={props.logIn}>Log In</LogInButton>
    ) : (
      <LogOutButton onClick={props.logOut}>Log Out</LogOutButton>
    )}
  </div>
);

export default Login;
