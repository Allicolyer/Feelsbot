import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

const HappyMeter = props => {
  let colors = [];
  switch (true) {
    case props.percent < 33:
      colors.push("#922B21", "#C0392B ");
      break;
    case props.percent < 66:
      colors.push("#F4D03F", "#F9E79F");
      break;
    default:
      colors.push("#239B56", "#58D68D");
  }

  return (
    <ProgressBar
      percent={props.percent}
      filledBackground={`linear-gradient(to left, ${colors[0]}, ${colors[1]})`}
    />
  );
};

export default HappyMeter;
