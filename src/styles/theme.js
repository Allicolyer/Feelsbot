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
  //bright teal
  primary: "#54BACE",
  primaryTint: "#98d6e2",
  primaryShade: "#32707c",
  //bright red
  secondary: "#E94467",
  secondaryTint: "#f28fa4",
  secondaryShade: "#8c293e",
  gray: "#828081",
  grayTint: "#b4b3b3",
  grayShade: "#4e4d4d",
  lightgray: "#dad9d9",
  info: "#1a1a1a",
  white: "#fff"
};

const metercolors = {
  sad: ["#922B21", "#C0392B"],
  neutral: ["#F4D03F", "#F9E79F"],
  happy: ["#239B56", "#58D68D"]
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
  metercolors,
  shadows,
  ...sizes,
  ...zIndex
};
