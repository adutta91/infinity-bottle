import React from "react";
import Logo from "./Logo";
import AuthButton from "./AuthButton";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 760px;
  margin: 0 auto;
  padding: 20px 0;
`;

const NavBar = () => {
  return (
    <StyledNav>
      <Logo />
      <AuthButton />
    </StyledNav>
  );
};

export default NavBar;
