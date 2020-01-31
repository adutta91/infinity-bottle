import React from "react";
import { ThemeProvider } from "styled-components";
import variables from "./variables";

export default ({ children }) => (
  <ThemeProvider theme={{ variables }}>{children}</ThemeProvider>
);
