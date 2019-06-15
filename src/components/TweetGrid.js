import React from "react";
import StackGrid from "react-stack-grid";
import TweetCard from "./TweetCard";
import { TwitterTweetEmbed } from "react-twitter-embed";
import ReactDOM from "react-dom";
import { Text } from "./shared";

const measureHeight = element =>
  element ? ReactDOM.findDOMNode(element).offsetHeight : 0;

const heightTimer = (element, grid) => {
  let timerID = setInterval(() => {
    measureHeight(element);
    console.log("I'm still going");
    if (measureHeight(element)) {
      updateGrid(grid);
      clearInterval(timerID);
      console.log("I stop");
    }
  }, 500);
  //stop automatically after 5 seconds
  setTimeout(() => {
    clearInterval(timerID);
  }, 5000);
};

const updateGrid = grid => {
  grid.updateLayout();
};

class TweetGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweets: this.props.rating.tweets };
  }

  componentWillMount() {
    let findContent = setInterval(() => {
      this.content && heightTimer(this.content, this.grid);
      console.log("I trying");
      if (this.content) {
        //stop once it finds the content
        clearInterval(findContent);
        console.log("I find");
      }
    }, 200);

    //stop automatically after 5 seconds
    setTimeout(() => {
      clearInterval(findContent);
    }, 5000);
  }

  render() {
    if (this.props.rating) {
      return (
        <div id="stack-grid" display="none">
          {/* <button onClick={() => this.updateGrid()}>hi</button> */}
          <StackGrid columnWidth={300} gridRef={grid => (this.grid = grid)}>
            {this.props.rating.tweets.map(tweet => (
              <div key={tweet.id_str}>
                <TwitterTweetEmbed
                  ref={r => (this.content = r)}
                  tweetId={tweet.id_str}
                />
              </div>
            ))}
          </StackGrid>
        </div>
      );
    } else return <Text> No Tweets </Text>;
  }
}

export default TweetGrid;
