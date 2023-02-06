import React, { createContext, useContext } from "react";

import { THEME, ITheme } from "../design/theme";

const ThemeContext = createContext<ITheme>(THEME);

export default function useTheme() {
  const theme = useContext(ThemeContext);
  return theme;
}
