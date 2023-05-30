import React from "react";
import { ThemeProp } from "./interface";
import { ThemeProvider } from "@emotion/react";
import { podcastTheme } from "./podcastTheme";
import { CssBaseline } from "@mui/material";

export const AppTheme: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={podcastTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
