import React from "react";
import { Box, Card, Heading, Text } from "rebass";

const TweetTable = props => {
  let tweets = props.tweets;
  return (
    <div>
      <h3> {props.title} </h3>
      {tweets.map(tweet => (
        <Box width={256}>
          <Card p={1} borderRadius={2} boxShadow="0 0 16px rgba(0, 0, 0, .25)">
            <Box px={2}>
              <Heading as="h3">
                <a href={tweet.url}>{tweet.user.screen_name}</a>
              </Heading>
              <Text fontSize={0}>{tweet.text}</Text>
            </Box>
          </Card>
        </Box>
      ))}
    </div>
  );
};

export default TweetTable;
