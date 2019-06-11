import React, { Component } from "react";
import Map from "./Map";
import { Title, Text, Content, Space } from "./shared";

class Home extends Component {
  render() {
    return (
      <div>
        <Content>
          <Space />
          <Title>Hi I'm FeelsBot </Title>
          <Text>I assess how humans are feeling by reading their tweets.</Text>
        </Content>
        <Map />
      </div>
    );
  }
}

export default Home;
