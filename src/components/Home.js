import React, { Component } from "react";
import "../styles/App.css";
import Map from "./Map";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Search for a Place</h1>
        </header>
        <div id="wrapper">
          <Map />
        </div>
      </div>
    );
  }
}

export default Home;
