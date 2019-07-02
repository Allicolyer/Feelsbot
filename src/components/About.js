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
  tablet,
  Footer
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
      <Subtitle> How Feelsbot works </Subtitle>
      <Text>
        Feelsbot uses a machine learning model from IBM to analyze emotions in
        tweets. Using this algorithm, Feelsbot put tweets into five categories:
        joy, sadness, anger, fear and disgust. This algorithm only works in
        English, so Feelsbot can only analyze tweets that are in English. Each
        tweet receives a confidence level of how strongly it matches one of
        those categories. Feelsbots puts tweets that have a confidence level
        higher than 65% into each category. Once the tweets have been
        categorized, the joy meter is calculated as the percentage joyful tweets
        versus every other emotion.
      </Text>
      <Text>
        When using the map, Feelsbot uses Twitter's API to fetch the last 100
        tweets that are geotagged near the location entered. Often times, there
        are not many recent geotagged tweets. When this happens Twitter fetches
        tweets of users whose profile locations are near the location entered
        into the map. When analyzing tweets by a specific Twitter account,
        Feelsbot fetches the last 150 tweets by that account. Twitter profiles
        need to be public for Feelsbot to work.
      </Text>

      <FlexDiv>
        <Image src={sad} />
        <Image src={neutral} />
        <Image src={happy} />
      </FlexDiv>

      <Subtitle> What we can learn from Feelsbot</Subtitle>
      <Text>
        The way Feelsbot categorizes tweets can tell us a lot about the nuances
        of human language that are hard for a machine to pick up on. Did
        Feelsbot surprise you in any way? If you want to explore more with
        natural language processing, check out IBM's{" "}
        <Link
          href="https://natural-language-understanding-demo.ng.bluemix.net/"
          target="_blank"
        >
          demo{" "}
        </Link>
        of their machine learning model.
      </Text>

      <Subtitle> Contributors</Subtitle>
      <FlexDiv>
        <AuthorDiv>
          <Avatar src="https://avatars1.githubusercontent.com/u/11083917?s=460&v=4" />
          <Text>
            Feelsbot was created by{" "}
            <Link href="https://twitter.com/allicolyer" target="_blank">
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
      <Text>
        If you liked this AI experiment, please share it with your friends. Feel
        free to add me on{" "}
        <Link href="https://www.twitter.com/allicolyer" target="_blank">
          Twitter
        </Link>{" "}
        or contact me with any issues.
      </Text>
    </LeftContent>
    <Footer />
  </div>
);

export default About;
