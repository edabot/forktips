import React from "react";
import LoginButton from "./LoginButton";
import { Link } from "react-router-dom";

const FlexBar = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};

const Navbar = props => (
  <div style={FlexBar}>
    <Link to="/">home</Link>
    <LoginButton
      loggedIn={props.loggedIn}
      logIn={props.logIn}
      logOut={props.logOut}
    />
  </div>
);

export default Navbar;
