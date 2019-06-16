import React from "react";
import styled from "styled-components";
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
    let rerender = false;

    let findelement = setInterval(() => {
      //make an array from the embedded tweets nodes
      let embeds = document.getElementsByClassName("twitter-tweet");
      //check if the heights of the first one is greater than 0
      let height = embeds.length ? embeds[0].clientHeight : false;

      if (height) {
        this.updateGrid();
        rerender = true;
        clearInterval(findelement);
        console.log("done");
      }
    }, 500);

    //stop automatically after 4 seconds if tweet embeds are not loading
    setTimeout(() => {
      clearInterval(findelement);
      //update the grid anyway with whatever is available if it hasn't yet
      if (!rerender) {
        this.updateGrid();
        rerender = true;
        console.log("timeout");
      }
    }, 4000);
  }

  render() {
    if (this.props.rating.num) {
      return (
        <div>
          <div id="stack-grid">
            <StackGrid columnWidth={300} gridRef={grid => (this.grid = grid)}>
              {this.props.rating.tweets.map(tweet => (
                <div key={tweet.id_str}>
                  <TwitterTweetEmbed tweetId={tweet.id_str} />
                </div>
              ))}
            </StackGrid>
          </div>
        </div>
      );
    } else return <Text> No Tweets </Text>;
  }
}

export default TweetGrid;
