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

const colors = {
  //forest green
  primary: "#1E392A",
  primaryTint: "#62746a",
  primaryShade: "#15281d",
  //mint green
  secondary: "#62C370",
  secondaryTint: "#77d6a3",
  secondaryShade: "#2a8957",
  //tanish yellow
  tertiary: "#E9C893",
  tertiaryTint: "#f0d9b3",
  tertiaryShade: "#a38c67",
  gray: "#828081",
  grayTint: "#b4b3b3",
  grayShade: "#4e4d4d",
  lightgray: "#dad9d9",
  info: "#1a1a1a",
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
  colors,
  shadows,
  ...sizes,
  ...zIndex
};
