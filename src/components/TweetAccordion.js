import React from "react";
import { AccordionItem } from "react-light-accordion";
import { TwitterTweetEmbed } from "react-twitter-embed";
import styled from "styled-components";
import { Flex } from "rebass";

const Tweet = styled.div`
  padding: 10px;
`;

const TweetAccordion = props => {
  if (!!props.rating.num) {
    return (
      <AccordionItem title={props.title}>
        <Flex justifyContent="center">
          {props.rating.tweets.map(tweet => (
            <Tweet>
              <TwitterTweetEmbed
                tweetId={`${tweet.id_str}`}
                // options={{ cards: "hidden" }}
              />
            </Tweet>
          ))}
        </Flex>
      </AccordionItem>
    );
  } else {
    return <AccordionItem title={props.title}> No tweets! </AccordionItem>;
  }
};

export default TweetAccordion;
