import React from "react";
import StackGrid from "react-stack-grid";
import { TwitterTweetEmbed } from "react-twitter-embed";

class TweetGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tweetLength = this.props.rating.tweets.length;
    if (this.props.rating) {
      let i;
      for (i = 0; i < tweetLength; i++) {
        this.props.rating.tweets[i].num = i + 1;
      }
      return (
        <div id="stack-grid" display="none" width="50%">
          <StackGrid columnWidth={300} gridRef={grid => (this.grid = grid)}>
            {this.props.rating.tweets.map(tweet => (
              <div key={`key${tweet.num}`}>
                <TwitterTweetEmbed tweetId={`${tweet.id_str}`} />
              </div>
            ))}
          </StackGrid>
        </div>
      );
    } else return <div> "no tweets" </div>;
  }
}

export default TweetGrid;
