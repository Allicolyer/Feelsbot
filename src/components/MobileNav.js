import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import styled from "styled-components";
import { Link } from "./shared";

function MobileNav() {
  const [open, toggleNav] = useState(false);

  return (
    <div>
      <HamburgerMenu
        isOpen={open}
        menuClicked={() => toggleNav(!open)}
        width={26}
        height={18}
        strokeWidth={2}
        rotate={0}
        color="white"
        animationDuration={0.5}
      />
      {open && <Menu />}
    </div>
  );
}

const Menu = () => (
  <MenuContainer>
    <NavLink href="/">Location Search</NavLink>
    <NavLink href="user">User Search</NavLink>
    <NavLink href="about">About</NavLink>
    <NavLink href="https://github.com/Allicolyer/Feelsbot">Github</NavLink>
    <Offset />
  </MenuContainer>
);

//Offsets the menu so it appears to be centered vertically
const Offset = styled.div`
  height: ${(p) => 2 * p.theme.navHeight}px;
`;

const NavLink = styled(Link)`
  color: ${(p) => p.theme.colors.white};
  font-size: 2em;
  padding: ${(p) => p.theme.space[4]}px;
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
top: ${(p) => p.theme.navHeight}px;
left: 0
background: ${(p) => p.theme.colors.primary};
opacity: 0.80;
z-index: ${(p) => p.theme.mobileStepper};
`;

export default MobileNav;
