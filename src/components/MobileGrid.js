import React from "react";
import styled from "styled-components";
import { TwitterTweetEmbed } from "react-twitter-embed";
import {
  Subtitle,
  RetweetContainer,
  RetweetText,
  RetweetArrows
} from "./shared";

const MobileGrid = ({ description, rating }) => (
  <Container>
    {rating.num ? (
      <div>
        <Subtitle>{description}</Subtitle>
        {rating.tweets.map(tweet => (
          <div>
            {tweet.retweeted_status && (
              <RetweetContainer>
                <RetweetText>Retweet by {tweet.user.screen_name}</RetweetText>
                <RetweetArrows />
              </RetweetContainer>
            )}
            <div key={tweet.id_str}>
              <TwitterTweetEmbed tweetId={tweet.id_str} />
            </div>
          </div>
        ))}
      </div>
    ) : (
      <Subtitle> No {description} </Subtitle>
    )}
  </Container>
);

export default MobileGrid;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`;
