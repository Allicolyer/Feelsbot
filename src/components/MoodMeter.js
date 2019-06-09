import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import styled from "styled-components";
import { theme } from "../styles/theme";

const MeterStyles = styled.div`
  width: 60%;
  padding: 20px;
  margin: 0 auto;
`;

const Emoji = styled.span`
  font-size: 30px;
`;

const colors = theme.metercolors;

const emojis = {
  sobbing: "😭",
  sad: "🙁",
  neutral: "😐",
  happy: "🙂",
  estatic: "🤩"
};

const emojiKeys = Object.keys(emojis);

const MoodMeter = ({ percent, mood }) => {
  console.log(mood);
  console.log(colors);
  console.log(colors[mood]);

  let meterColors = colors[mood];
  return (
    <MeterStyles>
      <ProgressBar
        percent={percent}
        filledBackground={`linear-gradient(to left, ${meterColors[0]}, ${
          meterColors[1]
        })`}
      >
        {emojiKeys.map((emotion, index) => {
          return (
            <Step transition="scale" position={90} key={index}>
              {({ accomplished }) => (
                <div
                  className={`transitionStep ${
                    accomplished ? "accomplished" : null
                  }`}
                  style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                >
                  <Emoji role="img" aria-label={emotion}>
                    {emojis[emotion]}
                  </Emoji>
                </div>
              )}
            </Step>
          );
        })}
      </ProgressBar>
    </MeterStyles>
  );
};

export default MoodMeter;
