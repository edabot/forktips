import React from 'react';

const Login = props => (
  <div>
    {!props.loggedIn ? (
      <button onClick={props.logIn}>Log In</button>
    ) : (
      <button onClick={props.logOut}>Log Out</button>
    )}
  </div>
);

export default Login;
