import React from "react";
import styled from "styled-components";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { Text, Subtitle } from "./shared";

const MobileGrid = ({ title, rating }) => (
  <Container>
    <Subtitle>{title}</Subtitle>
    {rating.num ? (
      <div>
        {rating.tweets.map(tweet => (
          <div key={tweet.id_str}>
            <TwitterTweetEmbed tweetId={tweet.id_str} />
          </div>
        ))}
      </div>
    ) : (
      <Text> No Tweets </Text>
    )}
  </Container>
);

export default MobileGrid;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`;
