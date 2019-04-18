import React from "react";
import StackGrid from "react-stack-grid";
import { TwitterTweetEmbed } from "react-twitter-embed";

class TweetGrid extends React.Component {
  reload = () => {
    this.grid.updateLayout();
  };

  render() {
    let i;
    for (i = 0; i < this.props.rating.tweets.length; i++) {
      this.props.rating.tweets[i].num = i + 1;
    }
    return (
      <div id="stack-grid">
        <StackGrid columnWidth={300} gridRef={grid => (this.grid = grid)}>
          {this.props.rating.tweets.map(tweet => (
            <div key={`key${tweet.num}`}>
              <TwitterTweetEmbed tweetId={`${tweet.id_str}`} />
            </div>
          ))}
        </StackGrid>
      </div>
    );
  }
}

export default TweetGrid;
