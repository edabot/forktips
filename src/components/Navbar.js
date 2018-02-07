import React from 'react';
import LogIn from './Login';
import { Link } from 'react-router-dom';

const Navbar = props => (
  <div class="nav">
    <div className="nav_bar">
      <div>
        <Link to="/">ForkTips</Link>
      </div>
      <div className="nav_right">
        <Link to="/new">new recipe</Link>
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
