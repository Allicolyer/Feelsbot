import styled from "styled-components";

export const Text = styled.p`
  color: ${p => p.theme.colors.info};
`;

export const Span = styled.span`
  color: ${p => p.theme.colors.info};
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${p => p.theme.colors.primary};
  display: inline;
`;

export const Title = styled.h1`
  color: ${p => p.theme.colors.primary};
`;

export const Subtitle = styled.h3`
  color: ${p => p.theme.colors.primary};
`;

export const Layout = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
`;

export const Content = styled.div`
  height: 100%;
  width: 85%;
  margin: 0 auto;
  padding: ${p => p.theme.space[2]}px;
  line-height: ${p => p.theme.fontSizes[3]}px;
  text-align: center;
`;
