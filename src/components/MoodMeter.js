import * as React from "react";
import { theme } from "../styles/theme";
import styled from "styled-components";

let color;

const MoodMeter = ({ percent, mood }) => {
  if (mood == "happy") {
    color = theme.metercolors.happy;
  } else if (mood == "neutral") {
    color = theme.metercolors.neutral;
  } else if (mood == "sad") {
    color = theme.metercolors.sad;
  }

  return (
    <Container>
      <Outside color={color}>
        <Filler percent={percent} color={color} />
      </Outside>
    </Container>
  );
};

const Container = styled.div`
  width: 80%
  padding: 20px;
  margin: 0 auto;
`;

const Outside = styled.div`
  position: relative;
  height: 1em;
  width: 100%;
  border-radius: 50px;
  border: 1px solid #333;
  border-color: ${props => props.color};
`;

const Filler = styled("div")`
  background: ${props => props.color};
  height: 100%;
  border-radius: inherit;
  transition: width 0.2s ease-in;
  width: ${props => props.percent || "0"}%;
`;

export default MoodMeter;
