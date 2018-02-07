import React from 'react';
import LogIn from './Login';
import { Link } from 'react-router-dom';

const Navbar = props => (
  <div className="nav">
    <div className="nav_bar">
      <div className="logo">
        <Link to="/">ForkTips</Link>
      </div>
      <div className="nav_right">
        <div className="nav_right_item">
          <Link to="/new">new recipe</Link>
        </div>
        <LogIn
          loggedIn={props.loggedIn}
          logIn={props.logIn}
          logOut={props.logOut}
        />
      </div>
    </div>
  </div>
);

export default Navbar;
