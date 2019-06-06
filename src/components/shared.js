import styled from "styled-components";

export const Text = styled.p`
  color: ${p => p.theme.colors.info};
`;

export const Span = styled.span`
  color: ${p => p.theme.colors.info};
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${p => p.theme.colors.secondary};
  display: inline;
`;

export const Title = styled.h1`
  color: ${p => p.theme.colors.secondary};
`;

export const Subtitle = styled.h3`
  color: ${p => p.theme.colors.secondary};
`;
