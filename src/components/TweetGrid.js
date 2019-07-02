import React from "react";
import StackGrid from "react-stack-grid";
import { TwitterTweetEmbed } from "react-twitter-embed";
import {
  Subtitle,
  RetweetContainer,
  RetweetText,
  RetweetArrows
} from "./shared";

class TweetGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  updateGrid = () => {
    this.grid && this.grid.updateLayout();
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
      }
    }, 500);
    //stop automatically after 4 seconds if tweet embeds are not loading
    setTimeout(() => {
      clearInterval(findelement);
      //update the grid anyway with whatever is available if it hasn't yet
      if (!rerender) {
        this.updateGrid();
        rerender = true;
      }
    }, 4000);
  }

  render() {
    if (this.props.rating.num) {
      return (
        <div>
          <Subtitle>{this.props.description}</Subtitle>
          <StackGrid columnWidth={300} gridRef={grid => (this.grid = grid)}>
            {this.props.rating.tweets.map(tweet => (
              <div key={tweet.id_str}>
                {tweet.retweeted_status && (
                  <RetweetContainer>
                    <RetweetText>
                      Retweet by {tweet.user.screen_name}
                    </RetweetText>
                    <RetweetArrows />
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
    } else return <Subtitle> No {this.props.description} </Subtitle>;
  }
}

export default TweetGrid;
