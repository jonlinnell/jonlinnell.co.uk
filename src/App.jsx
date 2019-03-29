import React from 'react';
import styled from 'styled-components';

import media from './style/mediaQueries';

import Footer from './components/Footer';
import HeroTitle from './components/HeroTitle';
import JonIs from './components/JonIs';

import logoGithubWhite from './images/github_white.png';
import logoInstaWhite from './images/insta_white.png';
import logoLinkedinWhite from './images/linkedin_white.png';

const Main = styled.div`
  min-height: 100vh;

  background-color: ${({ theme }) => theme.backgroundColor || 'slategrey'};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.tablet`
    padding-top: 5vh;
  `}
`;

const ContentWrapper = styled.div`
  width: 40vw;

  ${media.desktop`
    width: 70vw;
  `}

  ${media.phone`
    width: 90vw;
  `}
`;

const HeroText = styled.p`
  font-weight: 200;
`;

const SocMedLinksGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;

  ${media.phone`
    grid-template-columns: 1fr;
    grid-gap: 5vh;
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

const App = () => (
  <Main>
    <ContentWrapper>
      <HeroTitle>Hi, I&apos;m Jon Linnell.</HeroTitle>
      <JonIs />

      <HeroText>
        I&apos;m currently redeveloping this site, but in the meantime, you can find me and my work
        on one of the platforms below.
      </HeroText>
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
        <SocMedLink
          href="https://instagram.com/jonlinnell"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocMedLogo src={logoInstaWhite} alt="Instagram" />
        </SocMedLink>
      </SocMedLinksGrid>
    </ContentWrapper>
    <Footer />
  </Main>
);

export default App;
