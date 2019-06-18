import React from "react";
import Select from "./Select";
import { Title, Text, Content, Space, Subtitle, mobile } from "./shared";

const Timeline = () => (
  <Content>
    <Space />
    <Title>Hi I'm FeelsBot </Title>
    <Text>I assess how humans are feeling by reading their tweets.</Text>{" "}
    <Space />
    <Subtitle>
      Enter a Twitter handle and I'll assess that person's tweets.
    </Subtitle>
    <Select />
  </Content>
);

export default Timeline;
