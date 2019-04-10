import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

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
    >
      <Step transition="scale">
        {({ accomplished }) => (
          <div
            className={`transitionStep ${accomplished ? "accomplished" : null}`}
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
          >
            <h1>😭</h1>
          </div>
        )}
      </Step>

      <Step transition="scale">
        {({ accomplished }) => (
          <div
            className={`transitionStep ${accomplished ? "accomplished" : null}`}
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
          >
            <h1>🙁</h1>
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <div
            className={`transitionStep ${accomplished ? "accomplished" : null}`}
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
          >
            <h1>😐</h1>
          </div>
        )}
      </Step>
      <Step transition="scale" position={90}>
        {({ accomplished }) => (
          <div
            className={`transitionStep ${accomplished ? "accomplished" : null}`}
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
          >
            <h1>🙂</h1>{" "}
          </div>
        )}
      </Step>
      <Step transition="scale" position={90}>
        {({ accomplished }) => (
          <div
            className={`transitionStep ${accomplished ? "accomplished" : null}`}
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
          >
            <h1>🤩</h1>{" "}
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default HappyMeter;
