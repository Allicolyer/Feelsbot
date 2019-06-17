import React, { Component } from "react";
import HamburgerMenu from "react-hamburger-menu";
import styled from "styled-components";
import { Link, FlexColumn } from "./shared";

class MobileNav extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div>
        <HamburgerMenu
          isOpen={this.state.open}
          menuClicked={this.handleClick.bind(this)}
          width={26}
          height={18}
          strokeWidth={2}
          rotate={0}
          color="white"
          animationDuration={0.5}
        />
        {this.state.open && <Menu />}
      </div>
    );
  }
}

const Menu = () => (
  <MenuContainer>
    <NavLink href="/">Map</NavLink>
    <NavLink href="timeline">Your Tweets</NavLink>
    <NavLink href="about">About</NavLink>
  </MenuContainer>
);

const NavLink = styled(Link)`
  color: ${p => p.theme.colors.white};
  font-size: 2em;
  padding: ${p => p.theme.space[4]}px;
  font-weight: bold;
`;

const MenuContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  width: 100%;
  height: 100vh
  text-size: 3em;
  position: absolute
  top: ${p => p.theme.navHeight}px;
  left: 0
  background: ${p => p.theme.colors.primary};
  opacity: 0.80;
  z-index: ${p => p.theme.mobileStepper};
`;

export default MobileNav;
