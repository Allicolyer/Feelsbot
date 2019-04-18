import React from "react";
import { AccordionItem } from "react-light-accordion";
import { TwitterTweetEmbed } from "react-twitter-embed";

const TweetAccordion = props => {
  if (!!props.rating.num) {
    return (
      <AccordionItem title={props.title}>
        <div className="tweet-flex-wraper">
          {props.rating.tweets.map(tweet => (
            <div className="tweet">
              <TwitterTweetEmbed
                tweetId={`${tweet.id_str}`}
                // options={{ cards: "hidden" }}
              />
            </div>
          ))}
        </div>
      </AccordionItem>
    );
  } else {
    return <AccordionItem title={props.title}> No tweets! </AccordionItem>;
  }
};

export default TweetAccordion;
