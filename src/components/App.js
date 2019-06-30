import React, { Component } from "react";
import "../styles/App.css";
import styled from "styled-components";
import Home from "./Home";
import About from "./About";
import Timeline from "./Timeline";
import { Router } from "@reach/router";
import logo from "../assets/logo.svg";
import MobileNav from "./MobileNav";
import {
  Subtitle,
  Span,
  Layout,
  mobile,
  ShowOnMobile,
  HideOnMobile
} from "./shared";

const App = () => (
  <Layout>
    {/* <Wrapper> */}
    <Navigation />
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Timeline path="/user" />
    </Router>
    {/* </Wrapper>
    <Footer /> */}
  </Layout>
);

const Navigation = () => (
  <Navbar>
    <LogoContainer href="/">
      <Logo src={logo} />
      <LogoText>FeelsBot</LogoText>
    </LogoContainer>
    <NavLinks>
      <HideOnMobile>
        <NavLink href="/">Map</NavLink>
        <NavLink href="user">Twitter User</NavLink>
        <NavLink href="about">About</NavLink>
      </HideOnMobile>
      <ShowOnMobile>
        <MobileNav />
      </ShowOnMobile>
    </NavLinks>
  </Navbar>
);

// const Footer = () => (
//   <div>
//     <FooterContainer>
//       <FooterSpan>© 2019 Feelsbot</FooterSpan>
//     </FooterContainer>
//   </div>
// );

// const Wrapper = styled.div`
//   min-height: calc(100vh - ${p => p.theme.navHeight / 2}px);
// `;

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
  margin: auto ${p => p.theme.space[2]}px;
`;

const Logo = styled.img`
  height: ${p => p.theme.navHeight * 0.8}px;
  padding: ${p => p.theme.space[2]}px;
  display: inline;
  margin: auto 0;
  transform: scale(-1, 1);
`;

const LogoText = styled(Subtitle)`
  margin: auto 0;
  padding: ${p => p.theme.space[0]}px;
  color: ${p => p.theme.colors.white};
`;

const NavLinks = styled.div`
  margin: auto ${p => p.theme.space[2]}px;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-size: 1em;
  color: ${p => p.theme.colors.white};
  display: inline;
  padding: ${p => p.theme.space[3]}px;
  @media ${mobile} {
    padding: ${p => p.theme.space[1]}px;
  }
`;

// const FooterContainer = styled.div`
//   background: ${p => p.theme.colors.primary};
//   width: 100%;
//   height: ${p => p.theme.navHeight / 2}px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const FooterSpan = styled(Span)`
//   color: ${p => p.theme.colors.white};
// `;

export default App;
