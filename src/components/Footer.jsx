import React from 'react';
import styled from 'styled-components';

import media from '../style/mediaQueries';

import Link from './Link';

const StyledFooter = styled.footer`
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

  color: ${({ theme: { backgroundColor } }) => backgroundColor};
  font-size: 0.6rem;
  font-weight: 300;
`;

const SourceLink = styled(Link)`
  color: ${({ theme: { backgroundColor } }) => backgroundColor} !important;
  margin-left: 0.6rem;
  text-decoration: none;

  transition: filter ease-in 0.15s;

  @media (hover: hover) {
    &:hover {
      filter: brightness(0.8);
    }
  }

  &:visited {
    color: ${({ theme: { textPrimary } }) => textPrimary};
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
