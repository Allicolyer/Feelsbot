import React from "react";
import Map from "./Map";
import { Title, Text, Content, Space } from "./shared";

const Home = () => (
  <div>
    <Content>
      <Space />
      <Title>Hi I'm FeelsBot </Title>
      <Text>I assess how humans are feeling by reading their tweets.</Text>
      <Text>I no longer have access to Twitter's API so I am on vacation for now.</Text>
    </Content>
    <Map />
  </div>
);

export default Home;
