import React from "react";
import { TweetTimeline } from "./Tweets";
import { Text, Heading } from "rebass";
import Dropdown from "./Dropdown";

class Timeline extends React.Component {
  constructor() {
    super();
    this.state = {
      screen_name: "",
      render: false,
      autocompleteText: "",
      search: false,
      selectedOption: null
    };
  }
  handleChange = selectedOption => {
    this.setState({
      selectedOption: selectedOption,
      screen_name: selectedOption.value,
      render: true
    });
    console.log(`Option selected:`, selectedOption);
  };
  componentDidMount() {
    let input = document.getElementById("react-select-2-input");
    input.addEventListener("keyup", e => {
      this.setState({
        autocompleteText: input.value,
        search: true,
        render: false
      });
      if (13 === e.keyCode) {
        this.setState({
          render: true
        });
      }
    });
    input.addEventListener("change", () => {
      console.log(input.value);
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
        <div id="timeline_tweet_wrapper">
          <div id="timeline-input">
            <Dropdown
              autocompleteText={this.state.autocompleteText}
              handleChange={this.handleChange}
              selectedOption={this.state.selectedOption}
            />
          </div>
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
