import React from "react";
import { TweetTimeline } from "./Tweets";
import { Text, Heading } from "rebass";

class Timeline extends React.Component {
  constructor() {
    super();
    this.state = {
      screen_name: "",
      render: false
    };
  }
  componentDidMount() {
    let input = document.getElementById("screen_name-input");
    input.addEventListener("change", () => {
      this.setState({
        screen_name: input.value,
        render: true
      });
    });
  }
  render() {
    return (
      <div className="App">
        <header>
          <Heading> Hi, I'm Arnold </Heading>
          <Text>
            {" "}
            I try to assess how humans are feeling by reading their tweets. Let
            me read your tweets and I'll tell you how you are feeling.
          </Text>
        </header>
        <div id="timeline_tweet_wrapper" className="timeline">
          <input
            className="long-input"
            id="screen_name-input"
            type="text"
            placeholder="Enter your Twitter handle"
          />
          <TweetTimelineRender
            render={this.state.render}
            screen_name={this.state.screen_name}
          />
        </div>
      </div>
    );
  }
}

const TweetTimelineRender = props => {
  if (props.render) {
    return <TweetTimeline screen_name={props.screen_name} />;
  } else {
    return (
      <div>Enter your Twitter handle so Arnold can assess your tweets</div>
    );
  }
};

export default Timeline;
