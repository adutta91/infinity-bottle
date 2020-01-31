import React from "react";

import styled from "styled-components";

const StyledSpinner = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(-20deg);
    }
    80% {
      transform: rotate(1080deg);
    }
    100% {
      transform: rotate(1080deg);
    }
  }

  > img {
    width: 100px;
    animation-name: spin;
    animation-duration: 2s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
  }
`;

// background: ${props => props.theme.colors.primary};
const Spinner = () => {
  return (
    <StyledSpinner>
      <img src="/icons/bottle.svg" alt="bottle outline" />
    </StyledSpinner>
  );
};

export default Spinner;
