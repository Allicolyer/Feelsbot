import React, { Component } from "react";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
import Timeline from "./Timeline";
import { Router, Link } from "@reach/router";
import { Button } from "rebass";

class App extends Component {
  render() {
    return <Navigation />;
  }
}

const Navigation = () => {
  return (
    <div>
      <nav className="navbar">
        <Button m={1} bg="black">
          <Link to="/">Home</Link>
        </Button>
        <Button m={1} bg="black">
          <Link to="Timeline">Your Tweets</Link>
        </Button>
        <Button m={1} bg="black">
          <Link to="About">About</Link>
        </Button>
      </nav>

      <Router>
        <Home path="/" />
        <About path="/About" />
        <Timeline path="/Timeline" />
      </Router>
    </div>
  );
};

export default App;
