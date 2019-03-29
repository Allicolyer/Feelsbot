import React, { Component } from "react";
import "../styles/App.css";
import Map from "./Map";
import { Heading } from "rebass";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Heading> Helen the Emotional Bot</Heading>
        </header>
        <Map />
      </div>
    );
  }
}

export default Home;
