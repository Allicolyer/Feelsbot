import React from "react";
import { AccordionItem } from "react-light-accordion";
import { TwitterTweetEmbed } from "react-twitter-embed";
import styled from "styled-components";

const TweetFlexWraper = styled.div`
  display: flex;
  justify-content: center;
`;

const Tweet = styled.div`
  padding: 10px;
`;

const TweetAccordion = props => {
  if (!!props.rating.num) {
    return (
      <AccordionItem title={props.title}>
        <TweetFlexWraper>
          {props.rating.tweets.map(tweet => (
            <Tweet>
              <TwitterTweetEmbed
                tweetId={`${tweet.id_str}`}
                // options={{ cards: "hidden" }}
              />
            </Tweet>
          ))}
        </TweetFlexWraper>
      </AccordionItem>
    );
  } else {
    return <AccordionItem title={props.title}> No tweets! </AccordionItem>;
  }
};

export default TweetAccordion;
