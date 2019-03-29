import React, { Component } from "react";
import "../styles/App.css";
import Map from "./Map";
import { Text, Heading } from "rebass";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Heading> Jackson the Emotional Bot</Heading>
          <Text> What does a robot think of human's tweets? </Text>
        </header>
        <Map />
      </div>
    );
  }
}

export default Home;
