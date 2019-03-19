import React, { Component } from "react";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
import { Router, Link } from "@reach/router";
import { Box } from "rebass";

class App extends Component {
  render() {
    return <Navigation />;
  }
}

const Navigation = () => {
  return (
    <div>
      <nav className="navbar">
        <Box bg="#282c34" color="white" p={3}>
          <Link to="/">Home</Link> <Link to="About">About</Link>
        </Box>
      </nav>

      <Router>
        <Home path="/" />
        <About path="/About" />
      </Router>
    </div>
  );
};

export default App;
