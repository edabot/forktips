import React from "react";

const buttonStyles = {
  border: 0,
  cursor: "pointer"
};

const logInStyles = {
  color: "orangered"
};

const logOutStyles = {
  color: "lightgray"
};

const Login = props => (
  <div>
    {!props.loggedIn ? (
      <button style={{ ...buttonStyles, ...logInStyles }} onClick={props.logIn}>
        Log In
      </button>
    ) : (
      <button
        style={{ ...buttonStyles, ...logOutStyles }}
        onClick={props.logOut}
      >
        Log Out
      </button>
    )}
  </div>
);

export default Login;
