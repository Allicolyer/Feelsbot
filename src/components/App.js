import React, { Component } from "react";
import "../styles/App.css";
import styled from "styled-components";
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

const Navbar = styled.div`
  background: gray;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: left;
  padding: 5px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: inline;
`;

const Navigation = () => {
  return (
    <div>
      <Navbar>
        <Button m={1} bg="black">
          <NavLink to="/">Home</NavLink>
        </Button>
        <Button m={1} bg="black">
          <NavLink to="Timeline">Your Tweets</NavLink>
        </Button>
        <Button m={1} bg="black">
          <NavLink to="About">About</NavLink>
        </Button>
      </Navbar>

      <Router>
        <Home path="/" />
        <About path="/About" />
        <Timeline path="/Timeline" />
      </Router>
    </div>
  );
};

export default App;
