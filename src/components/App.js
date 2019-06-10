import React, { Component } from "react";
import "../styles/App.css";
import styled from "styled-components";
import Home from "./Home";
import About from "./About";
import Timeline from "./Timeline";
import { Router } from "@reach/router";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import logo from "../assets/logo.svg";
import { Subtitle, Layout } from "./shared";
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
  display: flex;
  justify-content: space-between;
`;

const LogoContainer = styled.a`
  text-decoration: none;
  margin: auto 0;
  display: flex;
`;

const Logo = styled.img`
  height: ${p => p.theme.navHeight * 0.8}px;
  padding: ${p => p.theme.space[2]}px;
  display: inline;
  margin: auto 0;
`;

const LogoText = styled(Subtitle)`
  margin: auto 0;
  padding: ${p => p.theme.space[0]}px;
  color: ${p => p.theme.colors.white};
`;

const NavLinks = styled.div`
  margin: auto 0;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes[3]}px;
  color: ${p => p.theme.colors.white};
  display: inline;
  padding: ${p => p.theme.space[3]}px;
`;

const Navigation = () => {
  return (
    <Layout>
      <Navbar>
        <LogoContainer href="/">
          <Logo src={logo} />
          <LogoText>FeelsBot</LogoText>
        </LogoContainer>
        <NavLinks>
          <NavLink href="/">Map</NavLink>
          <NavLink href="Timeline">Your Tweets</NavLink>
          <NavLink href="About">About</NavLink>
        </NavLinks>
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
