import React from 'react';
import LoginButton from './LoginButton';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% - 80px);
  max-width: 1024px;
  margin: 20px auto;
`;

const Logo = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
`;

const Navbar = props => (
  <Nav>
    <Logo>
      <Link to="/">ForkTips</Link>
    </Logo>
    <LoginButton
      loggedIn={props.loggedIn}
      logIn={props.logIn}
      logOut={props.logOut}
    />
  </Nav>
);

export default Navbar;
