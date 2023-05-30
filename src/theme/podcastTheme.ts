import { createTheme } from "@mui/material";
import { ThemePalette } from "./enum";

export const podcastTheme = createTheme({
  palette: {
    primary: {
      main: ThemePalette.BLACK,
    },
    secondary: {
      main: ThemePalette.WHITE,
    },
    error: {
      main: ThemePalette.RED,
    },
  },
});
