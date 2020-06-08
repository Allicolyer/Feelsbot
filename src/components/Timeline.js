import React from "react";
import styled from "styled-components";

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
    <HelperText>Only public Twitter profiles will work. </HelperText>
    <Select />
  </Content>
);

const HelperText = styled(Text)`
  margin-top: 0px;
  font-size: 0.75em;
  font-style: italic;
`;

export default Timeline;
