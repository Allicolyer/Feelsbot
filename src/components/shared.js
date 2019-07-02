import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

export const mobile = `only screen and (max-width: ${theme.breakpoints[0]})`;
export const tablet = `only screen and (max-width: ${theme.breakpoints[1]})`;
export const bigtablet = `only screen and (max-width: ${theme.breakpoints[2]})`;

export const Text = styled.p`
  color: ${p => p.theme.colors.info};
  font-size: 1em
  line-height: 1.25em;
`;

export const Span = styled.span`
  color: ${p => p.theme.colors.info};
  font-size: 1em;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${p => p.theme.colors.primary};
  display: inline;
`;

export const Title = styled.h1`
  color: ${p => p.theme.colors.primary};
  font-size: 2em;
`;

export const Subtitle = styled.h3`
  color: ${p => p.theme.colors.primary};
  font-size: 1.25em;
`;

export const Button = styled.button`
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes[2]}px;
  border-radius: ${p => p.theme.fontSizes[1]}px;
  padding: ${p => p.theme.space[3] * 0.75}px;
  font-weight: bold;
  margin: ${p => p.theme.space[1]}px;
  align-text: center;
`;

export const Flex = styled.div`
  display: flex;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Layout = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 1.25em;
  @media ${tablet} {
    font-size: 1em;
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 85%;
  margin: 0 auto;
  padding: ${p => p.theme.space[1]}px;
  text-align: center;
`;

export const Space = styled.div`
  width: ${p => p.theme.space[4]}px;
  height: ${p => p.theme.space[4]}px;
  flex-shrink: 0;
`;

export const ShowOnMobile = styled.div`
  display: none;
  @media ${mobile} {
    display: block;
  }
`;

export const HideOnMobile = styled.div`
  @media ${mobile} {
    display: none;
  }
`;

export const ShowOnTablet = styled.div`
  display: none;
  @media ${tablet} {
    display: block;
  }
`;

export const HideOnTablet = styled.div`
  @media ${tablet} {
    display: none;
  }
`;

export const ShowOnBigTablet = styled.div`
  display: none;
  @media ${bigtablet} {
    display: block;
  }
`;

export const HideOnBigTablet = styled.div`
  @media ${bigtablet} {
    display: none;
  }
`;

export const isMobile = () => {
  var intViewportWidth = window.innerWidth;
  return intViewportWidth < theme.breakpointspx[0];
};

export const isTablet = () => {
  var intViewportWidth = window.innerWidth;
  return intViewportWidth < theme.breakpointspx[1];
};

//shared for both mobile and desktop grids
export const RetweetContainer = styled.div`
  padding: ${p => p.theme.space[1]}px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 10px;
  border-color: rgb(225, 232, 237);
  border-style: solid;
  border-width: 1px 1px 0px 1px;
  border-radius: 4px 4px 0px 0px;
`;

export const RetweetText = styled.span`
  color: ${p => p.theme.colors.info};
  font: 14px/1.4 Helvetica, Roboto, "Segoe UI", Calibri, sans-serif;
  margin-right: ${p => p.theme.space[1]}px;
`;

export const RetweetArrows = () => (
  <svg
    height="20"
    width="20"
    viewBox="0 0 557.000000 386.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,386.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path
        d="M2465 3451 c-48 -12 -75 -30 -95 -64 -39 -63 -17 -152 47 -194 25
-17 74 -18 733 -23 704 -5 705 -5 760 -28 115 -47 209 -143 252 -258 l23 -59
3 -1073 c1 -589 -1 -1072 -5 -1072 -5 0 -116 108 -248 241 -132 132 -252 247
-267 255 -35 18 -101 18 -138 -1 -57 -30 -88 -121 -59 -178 6 -12 185 -196
398 -410 417 -419 418 -419 499 -398 30 9 108 82 429 403 341 342 392 398 398
430 10 54 -1 86 -44 130 -34 33 -45 38 -85 38 -26 0 -59 -6 -74 -14 -15 -8
-137 -125 -272 -260 l-245 -246 -5 1102 -5 1103 -23 70 c-42 125 -90 203 -182
296 -97 97 -194 154 -327 191 -76 21 -95 22 -758 24 -374 2 -693 -1 -710 -5z"
      />
      <path
        d="M1076 3405 c-31 -11 -129 -103 -417 -391 -242 -242 -384 -391 -394
-415 -25 -54 -13 -103 35 -151 34 -35 42 -38 91 -38 30 0 60 4 67 9 8 5 128
122 268 262 l254 253 0 -1067 c0 -934 2 -1077 16 -1145 45 -222 181 -401 377
-497 170 -83 130 -80 927 -80 l705 0 33 23 c84 60 82 182 -5 239 -25 17 -74
18 -733 23 -687 5 -706 6 -756 26 -112 46 -190 121 -241 230 l-28 59 -3 1090
-2 1090 247 -246 c137 -136 258 -252 270 -258 12 -6 44 -11 72 -11 42 0 55 5
84 33 41 38 59 93 46 140 -6 23 -113 136 -407 430 -218 218 -404 397 -412 397
-8 0 -24 2 -35 5 -11 3 -38 -2 -59 -10z"
      />
    </g>
  </svg>
);

//footer
const FooterContainer = styled.div`
  background: ${p => p.theme.colors.white};
  width: 100%;
  height: ${p => p.theme.navHeight}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TimelineFooterContainer = styled(FooterContainer)`
  position: absolute;
  bottom: 0px;
  width: 80%;
`


const FooterSpan = styled(Span)`
  color: ${p => p.theme.colors.primary};
`;

export const Wrapper = styled.div`
  min-height: calc(100vh - ${p => p.theme.navHeight / 2}px);
`;

export const Footer = ({timeline}) => (
  <div>
    {timeline &&
      <TimelineFooterContainer>
      <FooterSpan>© 2019 Feelsbot</FooterSpan>
    </TimelineFooterContainer>
    }
    {!timeline &&
    <FooterContainer>
      <FooterSpan>© 2019 Feelsbot</FooterSpan>
    </FooterContainer>
    }
  </div>
);
