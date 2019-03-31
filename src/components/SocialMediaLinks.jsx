import React from 'react';
import styled from 'styled-components';

import media from '../style/mediaQueries';

import logoGithubWhite from '../images/github_white.png';
import logoInstaWhite from '../images/insta_white.png';
import logoLinkedinWhite from '../images/linkedin_white.png';

const SocMedLinksGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  grid-gap: 1em;

  ${media.phone`
    grid-template-columns: 1fr;
  `}
`;

const SocMedLogo = styled.img`
  max-width: 96px;
  max-height: 48px;

  filter: none;
  transition: filter ease-in 0.15s;
`;

const SocMedLink = styled.a`
  ${media}

  &:hover > ${SocMedLogo} {
    filter: brightness(0.8);
  }
`;

export default () => (
  <SocMedLinksGrid>
    <SocMedLink href="https://github.com/jonlinnell" target="_blank" rel="noopener noreferrer">
      <SocMedLogo src={logoGithubWhite} alt="GitHub" />
    </SocMedLink>
    <SocMedLink
      href="https://www.linkedin.com/in/jplinnell"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SocMedLogo src={logoLinkedinWhite} alt="LinkedIn" />
    </SocMedLink>
    <SocMedLink href="https://instagram.com/jonlinnell" target="_blank" rel="noopener noreferrer">
      <SocMedLogo src={logoInstaWhite} alt="Instagram" />
    </SocMedLink>
  </SocMedLinksGrid>
);
