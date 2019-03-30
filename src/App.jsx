import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import media from './style/mediaQueries';

import Footer from './components/Footer';
import HeroTitle from './components/HeroTitle';
import JonIs from './components/JonIs';
import SocialMediaLinks from './components/SocialMediaLinks';
import Page from './components/Page';
import Background from './components/Background';

const Main = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

const App = () => {
  const [minimised, setMinimised] = useState(false);

  const handleScroll = useCallback(() => {
    const hero = document.getElementById('hero');
    if (window.scrollY > (hero.clientHeight / 6)) {
      setMinimised(true);
    } else {
      setMinimised(false);
    }
  }, [minimised]);

  window.addEventListener('scroll', handleScroll);

  return (
    <React.Fragment>
      <Background minimised={minimised} />
      <Main>
        <Page id="hero">
          <ContentWrapper>
            <HeroTitle>Hi, I&apos;m Jon Linnell.</HeroTitle>
            <JonIs />

            <SocialMediaLinks />
          </ContentWrapper>
        </Page>
        <Page>
          <ContentWrapper>
            I&apos;m still redeveloping on this site. I&apos;ll have some cool stuff
            here soon, I promise!
          </ContentWrapper>
        </Page>
        <Footer />
      </Main>
    </React.Fragment>
  );
};

export default App;
