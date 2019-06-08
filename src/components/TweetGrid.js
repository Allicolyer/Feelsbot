import React from "react";
import StackGrid from "react-stack-grid";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { Text } from "./shared";

class TweetGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  updateGrid = () => {
    this.grid.updateLayout();
  };

  TwitterCard = () => {};

  render() {
    const tweetLength = this.props.rating.num;

    if (this.props.rating) {
      let i;
      for (i = 0; i < tweetLength; i++) {
        this.props.rating.tweets[i].num = i + 1;
      }
      return (
        <div id="stack-grid" display="none">
          <StackGrid columnWidth={300} gridRef={grid => (this.grid = grid)}>
            {this.props.rating.tweets.map(tweet => (
              <div key={`key${tweet.num}`}>
                <TwitterTweetEmbed tweetId={`${tweet.id_str}`} />
              </div>
            ))}
          </StackGrid>
        </div>
      );
    } else return <Text> No Tweets </Text>;
  }
}

export default TweetGrid;
