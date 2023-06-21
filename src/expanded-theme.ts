// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}

// import { Palette, PaletteColor } from "@mui/material/styles/createPalette";
// import { PaletteOptions } from "@mui/material/styles";

// declare module "@mui/material/styles" {
//   interface DefaultTheme {
//     palette: PaletteOptions;
//   }
// }

// declare module "@mui/material/styles/createPalette" {
//   interface PaletteColor {
//     [key: number]: string;
//   }

//   interface Palette {
//     tertiary: PaletteColor;
//   }
// }
// declare module "@mui/material/styles" {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }
