import React from "react";
import Tweets from "./Tweets";
import styled from "styled-components";
import Select from "./Select";
import { Title, Text, Content, Space, Subtitle, mobile } from "./shared";

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
      <Content>
        <Space />
        <Title>Hi I'm FeelsBot </Title>
        <Text>
          I assess how humans are feeling by reading their tweets.
        </Text>{" "}
        <Space />
        <Subtitle>
          {" "}
          Enter a Twitter handle and I'll assess that person's tweets.
        </Subtitle>
        <TimelineInput>
          <Select
            autocompleteText={this.state.autocompleteText}
            handleChange={this.handleChange}
            selectedOption={this.state.selectedOption}
          />
        </TimelineInput>
        <TweetTimelineRender
          render={this.state.render}
          screen_name={this.state.screen_name}
        />
      </Content>
    );
  }
}

const TimelineInput = styled.div`
  width: 60%;
  margin: 0 auto;
  @media ${mobile} {
    width: 80%;
  }
`;

const TweetTimelineRender = ({ render, screen_name }) => {
  if (render) {
    return <Tweets screen_name={screen_name} timeline />;
  } else return null;
};

export default Timeline;
