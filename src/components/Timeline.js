import React from "react";
import Select from "./Select";
import { Title, Text, Content, Space, Subtitle } from "./shared";

const Timeline = () => (
  <Content>
    <Space />
    <Title>Hi I'm FeelsBot </Title>
    <Text>I assess how humans are feeling by reading their tweets.</Text>{" "}
    <Space />
    <Subtitle>
      Search for a Twitter user and I'll assess that user's tweets.
    </Subtitle>
    <Select />
  </Content>
);

export default Timeline;
