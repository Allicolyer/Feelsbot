import React, { Component } from "react";
import "../styles/App.css";
import styled from "styled-components";
import Home from "./Home";
import About from "./About";
import Timeline from "./Timeline";
import { Router, Link } from "@reach/router";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    );
  }
}

const Navbar = styled.div`
  background: ${p => p.theme.colors.lightgray};
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: left;
  padding: 5px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.primaryDark1};
  display: inline;
  padding: ${p => p.theme.space[2]}px;
  margin: ${p => p.theme.space[2]}px;
`;

const Navigation = () => {
  return (
    <header>
      <Navbar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="Timeline">Your Tweets</NavLink>
        <NavLink to="About">About</NavLink>
      </Navbar>

      <Router>
        <Home path="/" />
        <About path="/About" />
        <Timeline path="/Timeline" />
      </Router>
    </header>
  );
};

export default App;
