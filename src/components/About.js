import React from "react";
import { Title, Text, Link } from "./shared";
import happy from "../assets/happyBot.svg";
import styled from "styled-components";

const HappyBot = styled.img`
  height: 200px;
  display: block;
  margin: 0 auto;
  padding: ${p => p.theme.space[3]}px;
`;

const About = () => (
  <div>
    <Title> How does AI understand our emotions?</Title>
    <Text>
      This project uses IBM's natural langauge understanding to understand the
      emotions that are in tweets.
    </Text>
    <Text>
      {" "}
      Check out IBM's{" "}
      <Link href="https://natural-language-understanding-demo.ng.bluemix.net/">
        demo{" "}
      </Link>
      of their machine learning model.
      <HappyBot src={happy} />
    </Text>
  </div>
);

export default About;
