import React from 'react';
import LogIn from './Login';
import { Link } from 'react-router-dom';

const Navbar = props => (
  <div>
    <Link to="/">home</Link>
    <LogIn
      loggedIn={props.loggedIn}
      logIn={props.logIn}
      logOut={props.logOut}
    />
  </div>
);

export default Navbar;
