import React from "react";
import { Heading, Text } from "rebass";
import { AccordionItem } from "react-light-accordion";

const TweetAccordion = props => {
  if (!!props.rating.num) {
    return (
      <AccordionItem title={props.title}>
        {props.rating.tweets.map(tweet => (
          <div>
            <Heading as="h6">
              <a href={tweet.url}>{tweet.user.screen_name}</a>
            </Heading>
            <Text fontSize={3}>{tweet.text}</Text>
          </div>
        ))}
      </AccordionItem>
    );
  } else {
    return <AccordionItem title={props.title}> No tweets! </AccordionItem>;
  }
};

export default TweetAccordion;
