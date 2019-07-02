import * as React from "react";
import { theme } from "../styles/theme";
import styled from "styled-components";
import { Subtitle, mobile } from "./shared";

let color;

const MoodMeter = ({ percent, mood, loading }) => {
  if (mood === "happy") {
    color = theme.metercolors.happy;
  } else if (mood === "neutral") {
    color = theme.metercolors.neutral;
  } else if (mood === "sad") {
    color = theme.metercolors.sad;
  } else {
    color = theme.colors.primary;
  }

  return (
    <Container>
      <ZeroPercent>0%</ZeroPercent>
      <Outside color={color}>
        {loading && <LoadingFiller />}
        <Filler percent={percent} color={color} />
      </Outside>
      <OneHundredPercent>100%</OneHundredPercent>
    </Container>
  );
};

const OneHundredPercent = styled(Subtitle)`
  margin: 0 0 0 ${props => props.theme.space[3]}px;
  @media ${mobile} {
    display: none;
  }
`;

const ZeroPercent = styled(Subtitle)`
  margin: 0 ${props => props.theme.space[3]}px 0 0;
  @media ${mobile} {
    display: none;
  }
`;

const Container = styled.div`
  width: 80%
  padding: ${props => props.theme.space[3]}px;
  display:flex;
  alignn-items:center;
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

const Filler = styled.div`
  background: ${props => props.color};
  height: 100%;
  border-radius: inherit;
  transition: width 0.2s ease-in;
  width: ${props => props.percent || "0"}%;
`;

const LoadingFiller = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: inherit;
  background-color: ${props => props.theme.colors.primary};
  overflow: hidden;
  &:before {
    content: "";
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent 25%,
      rgba(238, 238, 238, 0.5) 25%,
      rgba(238, 238, 238, 0.5) 30%,
      transparent 30%,
      transparent 35%,
      rgba(238, 238, 238, 0.5) 35%,
      rgba(238, 238, 238, 0.5) 70%,
      transparent 70%
    );
    animation: shift 2s linear infinite;
    background-size: 60px 100%;
    box-shadow: inset 0 0px 1px rgba(0, 0, 0, 0.2),
      inset 0 -2px 1px rgba(0, 0, 0, 0.2);
    @keyframes shift {
      to {
        background-position: 60px 100%;
      }
    }
  }
`;

export default MoodMeter;
