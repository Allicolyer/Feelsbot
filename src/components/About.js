import React from "react";
import styled from "styled-components";
import happy from "../assets/happyBot.svg";
import { Link, Text, Title, Content } from "./shared";

const HappyBot = styled.img`
  height: 200px;
  display: block;
  margin: 0 auto;
  padding: ${p => p.theme.space[3]}px;
`;

const About = () => (
  <Content>
    <Title> How does AI understand our emotions?</Title>
    <Text>
      Feelsbot uses a machine learning model from IBM to analyze emotions in
      tweets. Using this algorithm, Feelsbot categorizes tweets into five
      categories: joy, sadness, anger, fear and disgust. Feelsbot can only
      analyze tweets that are in English and are longer than X words. Each tweet
      recieves a confidence level of how strongly it matches one of those
      categories. Tweets that have a confidence level higher than 65% are
      categorized as containing that emotion. Feelsbot calculates the joy meter
      by figuring out what percentage of the categorized tweets are rated as
      joyful versus every other emotion.
    </Text>
    <Text>
      Feelsbot uses Twitter's API to grab tweets based on the location entered
      into the map. Twitter will grab the first 100 tweets that are geotagged
      near that location. Often times, there are not many recent geotagged
      tweets, so Twitter defaults grabbing tweets based on the location of the
      Tweeter's profile. Feelsbot can also analyze the tweets of any Twitter
      user, as long as their profile is not set to private.
    </Text>
    <Text>
      {" "}
      Curious to explore more with nautral language procesing? Check out IBM's{" "}
      <Link href="https://natural-language-understanding-demo.ng.bluemix.net/">
        demo{" "}
      </Link>
      of their machine learning model.
      <HappyBot src={happy} />
    </Text>
    <Text>
      Feelsbot was created by{" "}
      <Link href="https://www.alli.science">Allison Colyer</Link>. Robot
      drawings were created by{" "}
      <Link href="https://www.rubyrios.com">Ruby Rios.</Link>
    </Text>
  </Content>
);

export default About;
