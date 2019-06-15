import React from "react";
import StackGrid from "react-stack-grid";
import TweetCard from "./TweetCard";
import { TwitterTweetEmbed } from "react-twitter-embed";
import ReactDOM from "react-dom";
import { Text } from "./shared";

const measureElement = element =>
  element && ReactDOM.findDOMNode(element).offsetHeight;

const heightTimer = (element, grid) => {
  let timerId = setInterval(() => {
    measureElement(element);
    if (measureElement(element)) {
      setTimeout(() => {
        clearInterval(timerId);
        updateGrid(grid);
      });
    }
  }, 500);
};

const updateGrid = grid => {
  grid.updateLayout();
};

class TweetGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    heightTimer(this.content, this.grid);
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
