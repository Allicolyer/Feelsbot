// import { ThemeInterface } from "./ThemeInterface";

// Guide
// [C] means `Component`
// --> Comments marked with //// are top level categories
// --> No tag comments (//) are sub categories
// --> Inline comments are for description

// Q: What to not put here?
// A: Don't put a variable here, if it is only valid to be with
//    a specific component, like `buttonHeight` should be stored beside
//    the `Button` component since it's not useful if that button is not
//    present.

const shadows = {
  small: "0px 2px 4px rgba(38, 38, 38, 0.15)",
  large: "0px 4px 8px rgba(38, 38, 38, 0.15);"
};

const zIndex = {
  mobileStepper: 1000,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};

const darkColors = {
  //// Colors
  primary: "#e00082",
  primaryDark1: "#a4036f",
  primaryLight1: "#EB7BBC",
  secondary: "#172a3a",
  secondaryDark1: "rgb(0, 0, 0)",
  secondaryLight1: "rgba(23, 42, 58, .5)",
  info: "#2a7ed2",
  infoLight1: "#C2DCF2",
  infoDark1: "#2a7ed2",
  lightGray: "rgb(244, 244, 244)",
  white: "#fff"
};

const lightColors = {
  //// Colors
  primary: "#e00082",
  primaryDark1: "#082333",
  primaryLight1: "#EB7BBC",
  secondary: "#082333",
  secondaryDark1: "#082333",
  secondaryLight1: "#082333",
  info: "#0F7AD8",
  infoLight1: "#459BF2",
  infoDark1: "#2a7ed2",
  lightGray: "#f9f9f9",
  white: "#fff"
};

const sizes = {
  ///// Sizes
  breakpoints: ["40em", "52em", "64em"],
  // Radius
  radii: [4, 6, 8],
  // [C] Container
  middleContainerWidth: 1200,
  middleContainerNarrowWidth: 1100,
  // [C] Nav
  navHeight: 64,
  brandHeight: 40,
  // Spaces
  space: [
    // margin and padding
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256
  ],

  // Font
  fontSizes: [12, 14, 16, 20, 28, 32, 48, 64],
  fontWeights: [300, 400, 600, 700],
  fontStackMono:
    "SFMono-Regular, 'Roboto Mono', Consolas, 'Liberation Mono', Menlo, Courier, monospace"
};

export const theme = {
  mode: "dark",
  colors: darkColors,
  shadows,
  ...sizes,
  ...zIndex
};
