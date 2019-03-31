import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ReactGA, { pageview } from 'react-ga';

import media from './style/mediaQueries';

import Footer from './components/Footer';
import HeroTitle from './components/HeroTitle';
import JonIs from './components/JonIs';
import SocialMediaLinks from './components/SocialMediaLinks';
import Page from './components/Page';
import Background from './components/Background';
import ScrollArrow from './components/ScrollArrow';

import GlobalStyle from './style/GlobalStyle';

const theme = {
  backgroundColor: 'rgb(237, 84, 74)',
  textPrimary: 'rgb(255, 255, 250)',
};

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

const HeroGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 4fr 1fr;

  ${media.phone`
    grid-template-rows: 1fr 6fr 1fr;
    align-items: start;
    height: 80vh;
  `}
`;

const App = () => {
  const [minimised, setMinimised] = useState(false);

  const handleScroll = () => {
    const hero = document.getElementById('hero');
    if (window.scrollY > hero.clientHeight / 6) {
      setMinimised(true);
    } else {
      setMinimised(false);
    }
  };

  useEffect(() => {
    ReactGA.initialize('UA-137380850-1');

    if (typeof window !== 'undefined') {
      pageview(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    if (minimised) {
      ReactGA.event({ category: 'Interaction', action: 'Page scrolled down' });
    }
  }, [minimised]);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Background minimised={minimised} />
        <Main>
          <Page id="hero" alignStartOnPhone>
            <ContentWrapper>
              <HeroGrid>
                <HeroTitle>Hi, I&apos;m Jon Linnell.</HeroTitle>
                <JonIs />

                <SocialMediaLinks />
              </HeroGrid>

              <ScrollArrow minimised={minimised} />
            </ContentWrapper>
          </Page>
          <Page>
            <ContentWrapper>
              I&apos;m still working on this site. I&apos;ll have some cool stuff here soon, I
              promise!
            </ContentWrapper>
          </Page>
          <Footer />
        </Main>
        <GlobalStyle />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
