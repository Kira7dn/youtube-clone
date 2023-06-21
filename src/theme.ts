export const tokens = {
  grey: {
    100: "#e6e6e6",
    200: "#cccccc",
    300: "#b3b3b3",
    400: "#999999",
    500: "#808080",
    600: "#666666",
    700: "#4d4d4d",
    800: "#333333",
    900: "#1a1a1a",
  },
  primary: {
    // red
    100: "#ffe6e6",
    200: "#ffb3b3",
    300: "#ff8080",
    400: "#ff4d4d",
    500: "#ff0000",
    600: "#cc0000",
    700: "#990000",
    800: "#660000",
    900: "#330000",
  },
  secondary: {
    // grey
    100: "#e6e6e6",
    200: "#cccccc",
    300: "#b3b3b3",
    400: "#999999",
    500: "#ffffff",
    600: "#666666",
    700: "#4d4d4d",
    800: "#333333",
    900: "#1a1a1a",
  },
  tertiary: {
    // purple
    500: "#8884d8",
  },
  background: {
    light: "#2d2d34",
    main: "#fffff",
  },
  text: {
    main: "#0f0f0f",
    light: "#fff",
  },
};

// mui theme settings
export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      ...tokens.background,
      default: tokens.background.main,
      light: tokens.background.light,
    },
  },
  typography: {
    fontFamily: ["YouTube Sans", "Roboto", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["YouTube Sans", "Roboto", "sans-serif"].join(","),
      fontSize: 32,
    },
    h2: {
      fontFamily: ["YouTube Sans", "Roboto", "sans-serif"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["YouTube Sans", "Roboto", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
    },
    h4: {
      fontFamily: ["YouTube Sans", "Roboto", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 400,
    },
    h5: {
      fontFamily: ["YouTube Sans", "Roboto", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
    },
    h6: {
      fontFamily: ["YouTube Sans", "Roboto", "sans-serif"].join(","),
      fontSize: 10,
    },
  },
};
