import React from 'react';
import styled from 'styled-components';

import media from './style/mediaQueries';

import Footer from './components/Footer';
import HeroTitle from './components/HeroTitle';
import JonIs from './components/JonIs';
import SocialMediaLinks from './components/SocialMediaLinks';

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
    width: 80vw;
  `}

  ${media.phone`
    width: 90vw;
  `}
`;

const App = () => (
  <Main>
    <ContentWrapper>
      <HeroTitle>Hi, I&apos;m Jon Linnell.</HeroTitle>

      <JonIs />

      <p style={{ fontWeight: 200 }}>
          I&apos;m currently redeveloping this site. In the meantime, you can find me and my
          work on the platforms below.
      </p>

      <SocialMediaLinks />

    </ContentWrapper>
    <Footer />
  </Main>
);

export default App;
