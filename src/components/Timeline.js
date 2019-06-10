import React from "react";
import Tweets from "./Tweets";
import Dropdown from "./Dropdown";
import styled from "styled-components";
import { Title, Subtitle, Text, Link } from "./shared";

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
  };
  componentDidMount() {
    let input = document.getElementById("react-select-2-input");
    input &&
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
    input &&
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
          <Title> Hi, I'm FeelsBot </Title>
          <Text>
            {" "}
            I try to assess how humans are feeling by reading their tweets. Let
            me read your tweets and I'll tell you how you are feeling.
          </Text>
        </header>
        <div id="timeline_tweet_wrapper">
          <TimelineInput>
            <Dropdown
              autocompleteText={this.state.autocompleteText}
              handleChange={this.handleChange}
              selectedOption={this.state.selectedOption}
            />
          </TimelineInput>
          <TweetTimelineRender
            render={this.state.render}
            screen_name={this.state.screen_name}
          />
        </div>
      </div>
    );
  }
}

const TimelineInput = styled.div`
  width: 60%;
  padding: 20px;
  margin: 0 auto;
  z-index: 10;
`;

const TweetTimelineRender = ({ render, screen_name }) => {
  if (render) {
    return <Tweets screen_name={screen_name} timeline />;
  } else {
    return (
      <div>Enter your Twitter handle so FeelsBot can assess your tweets</div>
    );
  }
};

export default Timeline;
