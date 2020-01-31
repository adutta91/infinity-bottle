import React from "react";
import styled from "styled-components";

const StyledLogo = styled.img`
  height: 50px;
`;

const Logo = () => <StyledLogo src="/icons/whiskey.svg" alt="logo" />;

export default Logo;
