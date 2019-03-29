import React from 'react';
import styled from 'styled-components';

import Link from './Link';

const StyledFooter = styled.footer`
  position: sticky;
  top: 100vh;

  padding: 4vh 0 1vh 0;

  font-size: 0.6rem;
  font-weight: 300;
`;

const SourceLink = styled(Link)`
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
