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

  componentWillUpdate() {
    let findelement = setInterval(() => {
      let embeds = document.getElementsByClassName("twitter-tweet");
      let height = embeds.length ? embeds[0].clientHeight : 0;
      if (height) {
        this.updateGrid();
        clearInterval(findelement);
      }
    }, 500);

    //stop automatically after 8 seconds if tweet embeds are not loading
    setTimeout(() => {
      clearInterval(findelement);
    }, 8000);
  }

  render() {
    if (this.props.rating) {
      return (
        <div id="stack-grid" display="none">
          <StackGrid columnWidth={300} gridRef={grid => (this.grid = grid)}>
            {this.props.rating.tweets.map(tweet => (
              <div key={tweet.id_str}>
                <TwitterTweetEmbed tweetId={tweet.id_str} />
              </div>
            ))}
          </StackGrid>
        </div>
      );
    } else return <Text> No Tweets </Text>;
  }
}

export default TweetGrid;
