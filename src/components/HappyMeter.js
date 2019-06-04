import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import styled from "styled-components";

const JoyMeter = styled.div`
  width: 60%;
  padding: 20px;
  margin: 0 auto;
`;

const Emoji = styled.span`
  font-size: 30px;
`;

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
    <JoyMeter>
      <ProgressBar
        percent={props.percent}
        filledBackground={`linear-gradient(to left, ${colors[0]}, ${
          colors[1]
        })`}
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <div
              className={`transitionStep ${
                accomplished ? "accomplished" : null
              }`}
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            >
              <Emoji role="img" aria-label="Sobbing">
                😭
              </Emoji>
            </div>
          )}
        </Step>

        <Step transition="scale">
          {({ accomplished }) => (
            <div
              className={`transitionStep ${
                accomplished ? "accomplished" : null
              }`}
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            >
              <Emoji role="img" aria-label="Sad">
                🙁
              </Emoji>
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div
              className={`transitionStep ${
                accomplished ? "accomplished" : null
              }`}
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            >
              <Emoji role="img" aria-label="Neutral">
                😐
              </Emoji>
            </div>
          )}
        </Step>
        <Step transition="scale" position={90}>
          {({ accomplished }) => (
            <div
              className={`transitionStep ${
                accomplished ? "accomplished" : null
              }`}
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            >
              <Emoji role="img" aria-label="Happy">
                🙂
              </Emoji>
            </div>
          )}
        </Step>
        <Step transition="scale" position={90}>
          {({ accomplished }) => (
            <div
              className={`transitionStep ${
                accomplished ? "accomplished" : null
              }`}
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            >
              <Emoji role="img" aria-label="Extremely Happy">
                🤩
              </Emoji>
            </div>
          )}
        </Step>
      </ProgressBar>
    </JoyMeter>
  );
};

export default HappyMeter;
