import React from "react";
import { AccordionItem } from "react-light-accordion";
import { TwitterTweetEmbed } from "react-twitter-embed";

const TweetAccordion = props => {
  if (!!props.rating.num) {
    return (
      <AccordionItem title={props.title}>
        {props.rating.tweets.map(tweet => (
          <div class="tweet">
            <TwitterTweetEmbed
              tweetId={`${tweet.id_str}`}
              options={{ cards: "hidden" }}
            />
          </div>
        ))}
      </AccordionItem>
    );
  } else {
    return <AccordionItem title={props.title}> No tweets! </AccordionItem>;
  }
};

export default TweetAccordion;
