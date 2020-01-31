import React from "react";
import { ThemeProvider } from "styled-components";
import variables from "./variables";
import GlobalStyle from "./global";

export default ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={{ variables }}>{children}</ThemeProvider>
  </>
);

// font-family: 'Raleway', sans-serif;
