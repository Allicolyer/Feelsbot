import React, { Component } from "react";
import "../styles/App.css";
import Map from "./Map";
import { Text, Heading } from "rebass";
import { Link } from "@reach/router";
import { theme } from "../styles/theme";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Heading color={theme.colors.primaryDark1}>Hi, I'm FeelsBot </Heading>
        <Text>
          {" "}
          I try to assess how humans are feeling by reading their tweets. Test
          out what I can do by using this map. I can also{" "}
          <Link to="Timeline">read your tweets</Link> and tell you how you are
          feeling.{" "}
        </Text>
        <Map />
      </div>
    );
  }
}

export default Home;
