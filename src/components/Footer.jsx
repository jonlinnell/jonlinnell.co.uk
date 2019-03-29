import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: sticky;
  top: 100vh;

  padding: 4vh 0 1vh 0;

  font-size: 0.5rem;
  font-weight: 400;
`;

const SourceLink = styled.a`
  color: ${({ theme: { textPrimary } }) => textPrimary};
  margin-left: 0.6rem;
  text-decoration: none;

  transition: border-bottom ease-in 0.15s;

  &:hover {
    border-bottom: 1px solid ${({ theme: { textPrimary } }) => textPrimary};
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
