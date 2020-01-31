import ThemeProvider from "../../styles/theme-provider";
import React from "react";

const withTheme = Component => {
  return ({ ...props }) => (
    <ThemeProvider>
      <Component {...props} />
    </ThemeProvider>
  );
};

export default withTheme;
