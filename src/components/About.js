import React from "react";
import styled from "styled-components";
import happy from "../assets/happyBot.svg";
import sad from "../assets/sadBot.svg";
import neutral from "../assets/neutralBot.svg";
import {
  Link,
  Text,
  Title,
  Content,
  Space,
  Subtitle,
  mobile,
  tablet
} from "./shared";

const Image = styled.img`
  width: 28%;
  height: 1%;
`;

const Avatar = styled.img`
  width: 80%
  border-radius: 100px;
`;

const AuthorDiv = styled.div`
  text-align: center;
  width: 28%;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  width: 50%;
  margin: 0 auto;
  padding: 0;
  @media ${tablet} {
    width: 80%;
  }
  @media ${mobile} {
    width: 100%;
  }
`;

const LeftContent = styled(Content)`
  text-align: left;
`;

const About = () => (
  <div>
    <Content>
      <Space />
      <Title> Can AI understand our emotions?</Title>
      <Text>How accurate is Feelsbot?</Text> <Space />
    </Content>
    <LeftContent>
      <Subtitle> How Feelsbot uses AI </Subtitle>
      <Text>
        Feelsbot uses a machine learning model from IBM to analyze emotions in
        tweets. Using this algorithm, Feelsbot categorizes tweets into five
        categories: joy, sadness, anger, fear and disgust. Feelsbot can only
        analyze tweets that are in English and are longer than X words. Each
        tweet receives a confidence level of how strongly it matches one of
        those categories. Tweets that have a confidence level higher than 65%
        are categorized as containing that emotion. Feelsbot calculates the joy
        meter by figuring out what percentage of the categorized tweets are
        rated as joyful versus every other emotion.
      </Text>
      <Text>
        {" "}
        Curious to explore more with nautral language procesing? Check out IBM's{" "}
        <Link
          href="https://natural-language-understanding-demo.ng.bluemix.net/"
          target="_blank"
        >
          demo{" "}
        </Link>
        of their machine learning model.
      </Text>
      <FlexDiv>
        <Image src={sad} />
        <Image src={neutral} />
        <Image src={happy} />
      </FlexDiv>
      <Subtitle> How Feelsbot uses Twitter </Subtitle>
      <Text>
        Feelsbot uses Twitter's API to grab tweets based on the location entered
        into the map. Twitter will grab the first 100 tweets that are geotagged
        near that location. Often times, there are not many recent geotagged
        tweets, so Twitter defaults grabbing tweets based on the location of the
        Tweeter's profile. Feelsbot can also analyze the tweets of any Twitter
        user, as long as their profile is not set to private.
      </Text>

      <Subtitle> Contributors</Subtitle>

      <FlexDiv>
        <AuthorDiv>
          <Avatar src="https://avatars1.githubusercontent.com/u/11083917?s=460&v=4" />
          <Text>
            Feelsbot was created by{" "}
            <Link href="http://www.alli.science" target="_blank">
              Allison Colyer.
            </Link>
          </Text>
        </AuthorDiv>
        <AuthorDiv>
          <Avatar src="https://roobeedotorg.files.wordpress.com/2019/05/rubyrios_branding2019-6-1.png?w=640" />
          <Text>
            Robot drawings were created by{" "}
            <Link href="https://www.rubyrios.com" target="_blank">
              Ruby Ríos.
            </Link>
          </Text>
        </AuthorDiv>
        <AuthorDiv>
          <Avatar src="https://pbs.twimg.com/profile_images/1065025670563033088/34PLNXb2.jpg" />
          <Text>
            {" "}
            Big thanks to{" "}
            <Link href="https://www.novvum.io/" target="_blank">
              Novvum
            </Link>{" "}
            for supporting the development of Feelsbot.
          </Text>
        </AuthorDiv>
      </FlexDiv>
    </LeftContent>
  </div>
);

export default About;
