import React from 'react';
import styled from 'styled-components';

import media from '../style/mediaQueries';

const StyledFooter = styled.footer`
  color: ${({ theme: { backgroundColor } }) => backgroundColor};

  position: sticky;
  top: 100vh;

  padding-bottom: 16px;

  ${media.desktop`
    padding-bottom: 12px;
  `}

  ${media.tablet`
    padding-bottom: 16px;
  `}

  ${media.phone`
    padding-bottom: 0.2rem;
  `}

  font-size: 0.6rem;
  font-weight: 300;
`;

const SourceLink = styled.a`
  color: ${({ theme: { backgroundColor } }) => backgroundColor};
  margin-left: 0.6rem;
  text-decoration: none;

  transition: filter ease-in 0.15s;

  @media (hover: hover) {
    &:hover {
      filter: brightness(0.8);
    }
  }

  &:visited {
    color: ${({ theme: { backgroundColor } }) => backgroundColor};
  }
`;

export default () => (
  <StyledFooter>
    Jon Linnell, {new Date(Date.now()).getUTCFullYear()}
    <SourceLink
      href="https://github.com/jonlinnell/jonlinnell.co.uk"
      target="_blank"
      rel="noopener noreferrer"
    >
      View the source.
    </SourceLink>
  </StyledFooter>
);
