import React from 'react';

const Login = props => (
  <div>
    {!props.loggedIn ? (
      <div className="login">
        <button onClick={props.logIn}>Log In</button>
      </div>
    ) : (
      <div className="logout">
        <button onClick={props.logOut}>Log Out</button>
      </div>
    )}
  </div>
);

export default Login;
