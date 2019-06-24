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
      let heights = [];
      this.props.rating.tweets.forEach(tweet => {
        let embed = document.getElementById(tweet.id_str);
        //check if the heightis greater than 0
        let height = embed ? embed.clientHeight : false;
        //make an array of the heights of the embedded tweets nodes
        heights.push(height);
      });

      if (
        heights.every(i => {
          return i;
        })
      ) {
        this.updateGrid();
        rerender = true;
        clearInterval(findelement);
        console.log(`${this.props.rating.num} done`);
      }
    }, 500);

    //stop automatically after 4 seconds if tweet embeds are not loading
    setTimeout(() => {
      clearInterval(findelement);
      //update the grid anyway with whatever is available if it hasn't yet
      if (!rerender) {
        this.updateGrid();
        rerender = true;
        console.log(`${this.props.rating.num} timeout`);
      }
    }, 4000);
  }

  render() {
    if (this.props.rating.num) {
      return (
        <div id="stack-grid">
          <StackGrid columnWidth={300} gridRef={grid => (this.grid = grid)}>
            {this.props.rating.tweets.map(tweet => (
              <div key={tweet.id_str}>
                {tweet.retweeted_status && (
                  <RetweetContainer>
                    <Text>{tweet.user.screen_name} Retweeted</Text>
                  </RetweetContainer>
                )}
                <div id={tweet.id_str}>
                  <TwitterTweetEmbed tweetId={tweet.id_str} />
                </div>
              </div>
            ))}
          </StackGrid>
        </div>
      );
    } else return <Text> No {this.props.description.toLowerCase()} </Text>;
  }
}

const RetweetContainer = styled.div`
  margin: 10px;
  margin-bottom: 0px;
  border-color: rgb(225, 232, 237);
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  font: 16px/1.4 Helvetica, Roboto, "Segoe UI", Calibri, sans-serif;
`;

export default TweetGrid;
