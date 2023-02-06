export interface IThemeColors {
  backgroundColor: string;
  primary: string;
  secondary: string;
}

export interface ITheme {
  colors: IThemeColors;
}

export const COLORS: IThemeColors = {
  backgroundColor: "#fffffb",
  primary: "#000000",
  secondary: "#ceceb9",
};

export const THEME: ITheme = {
  colors: COLORS,
};
