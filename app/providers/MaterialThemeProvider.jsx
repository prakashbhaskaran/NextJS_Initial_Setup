"use client";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  alpha,
  getContrastRatio,
} from "@mui/material";
import { createContext, useState } from "react";
import { cssStyle, color } from "@constants/style";
import { Quicksand } from "next/font/google";

export const ThemeContext = createContext();
const quicksand = Quicksand({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["300", "400", "700", "500", "600"],
  variable: "--quicksand-font",
});
const MaterialThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const handleDarkMode = () => {
    setTheme(!dark);
    setDark(!dark);
  };
  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
      text: {
        primary: color.global.black,
      },
      primary: {
        main: color.global.black,
      },
      secondary: {
        main: color.global.secondary,
      },
      teritiary: {
        main: color.global.quaternary,
        light: alpha(color.global.quaternary, 0.5),
        dark: alpha(color.global.quaternary, 0.9),
        contrastText:
          getContrastRatio(color.global.quaternary, color.global.white) > 4.5
            ? color.global.quaternary
            : color.global.white,
      },
      light: {
        main: color.global.white,
        light: alpha(color.global.white, 0.5),
        dark: alpha(color.global.white, 0.9),
        contrastText:
          getContrastRatio(color.global.white, color.global.white) > 4.5
            ? color.global.white
            : cssStyle.mainColor,
      },
    },
    typography: {
      fontFamily: quicksand.style.fontFamily,
    },
    components: {},
  });
  return (
    <ThemeContext.Provider value={{ handleDarkMode, dark }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default MaterialThemeProvider;
