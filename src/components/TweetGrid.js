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
        <StackGrid columnWidth={300} gridRef={grid => (this.grid = grid)}>
          {this.props.rating.tweets.map(tweet => (
            <div key={tweet.id_str}>
              {tweet.retweeted_status && (
                <RetweetContainer>
                  <RetweetText>Retweet by {tweet.user.screen_name}</RetweetText>
                  <RetweetArrows />
                </RetweetContainer>
              )}
              <div id={tweet.id_str}>
                <TwitterTweetEmbed tweetId={tweet.id_str} />
              </div>
            </div>
          ))}
        </StackGrid>
      );
    } else return <Text> No {this.props.description.toLowerCase()} </Text>;
  }
}

const RetweetContainer = styled.div`
  padding: ${p => p.theme.space[1]}px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 10px;
  border-color: rgb(225, 232, 237);
  border-style: solid;
  border-width: 1px 1px 0px 1px;
  border-radius: 4px 4px 0px 0px;
`;

const RetweetText = styled.span`
  color: ${p => p.theme.colors.info};
  font: 14px/1.4 Helvetica, Roboto, "Segoe UI", Calibri, sans-serif;
  margin-right: ${p => p.theme.space[1]}px;
`;

const RetweetArrows = () => (
  <svg
    height="20"
    width="20"
    viewBox="0 0 557.000000 386.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,386.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path
        d="M2465 3451 c-48 -12 -75 -30 -95 -64 -39 -63 -17 -152 47 -194 25
-17 74 -18 733 -23 704 -5 705 -5 760 -28 115 -47 209 -143 252 -258 l23 -59
3 -1073 c1 -589 -1 -1072 -5 -1072 -5 0 -116 108 -248 241 -132 132 -252 247
-267 255 -35 18 -101 18 -138 -1 -57 -30 -88 -121 -59 -178 6 -12 185 -196
398 -410 417 -419 418 -419 499 -398 30 9 108 82 429 403 341 342 392 398 398
430 10 54 -1 86 -44 130 -34 33 -45 38 -85 38 -26 0 -59 -6 -74 -14 -15 -8
-137 -125 -272 -260 l-245 -246 -5 1102 -5 1103 -23 70 c-42 125 -90 203 -182
296 -97 97 -194 154 -327 191 -76 21 -95 22 -758 24 -374 2 -693 -1 -710 -5z"
      />
      <path
        d="M1076 3405 c-31 -11 -129 -103 -417 -391 -242 -242 -384 -391 -394
-415 -25 -54 -13 -103 35 -151 34 -35 42 -38 91 -38 30 0 60 4 67 9 8 5 128
122 268 262 l254 253 0 -1067 c0 -934 2 -1077 16 -1145 45 -222 181 -401 377
-497 170 -83 130 -80 927 -80 l705 0 33 23 c84 60 82 182 -5 239 -25 17 -74
18 -733 23 -687 5 -706 6 -756 26 -112 46 -190 121 -241 230 l-28 59 -3 1090
-2 1090 247 -246 c137 -136 258 -252 270 -258 12 -6 44 -11 72 -11 42 0 55 5
84 33 41 38 59 93 46 140 -6 23 -113 136 -407 430 -218 218 -404 397 -412 397
-8 0 -24 2 -35 5 -11 3 -38 -2 -59 -10z"
      />
    </g>
  </svg>
);

export default TweetGrid;
