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
  return intViewportWidth < theme.breakpoints[0];
};

export const isTablet = () => {
  var intViewportWidth = window.innerWidth;
  return intViewportWidth < theme.breakpoints[1];
};
