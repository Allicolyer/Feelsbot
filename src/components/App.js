import React, { Component } from "react";
import "../styles/App.css";
import styled from "styled-components";
import Home from "./Home";
import About from "./About";
import Timeline from "./Timeline";
import { Router, Link } from "@reach/router";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import Layout from "./Layout";

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
  background: ${p => p.theme.colors.primary};
  width: 100%;
  height: ${p => p.theme.navHeight}px;
  align-content: center;
  display: flex;
  justify-content: left;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes[3]}px;
  color: ${p => p.theme.colors.white};
  display: inline;
  padding: ${p => p.theme.space[3]}px;
  margin: auto 0;
`;

const Navigation = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default App;
