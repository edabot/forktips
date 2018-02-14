import React from 'react';
import LoginButton from './LoginButton';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NewRecipeButton from './NewRecipeButton';

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% - 80px);
  max-width: 1024px;
  margin: 20px auto;
`;

const FlexRow = styled.div`
  display: flex;
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
    <FlexRow>
      <NewRecipeButton />
      <LoginButton
        loggedIn={props.loggedIn}
        logIn={props.logIn}
        logOut={props.logOut}
      />
    </FlexRow>
  </Nav>
);

export default Navbar;
