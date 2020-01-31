import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px;
  background: ${({ theme }) => theme.variables.colors.primary};
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: none;
  border: none;
`;

const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
