import React, { Component } from "react";
import Map from "./Map";
import { Title, Text, Link, Content } from "./shared";

class Home extends Component {
  render() {
    return (
      <div>
        <Content>
          <Title>Hi, I'm FeelsBot </Title>
          <Text>
            {" "}
            I try to assess how humans are feeling by reading their tweets.{" "}
          </Text>
          <Text>
            Put in a location that you want me to read the Tweets from. I can
            also <Link href="/timeline">read your tweets</Link> and tell you how
            you are feeling.{" "}
          </Text>
        </Content>
        <Map />
      </div>
    );
  }
}

export default Home;
