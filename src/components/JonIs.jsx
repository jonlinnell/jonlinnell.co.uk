import React, { useEffect } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';

import media from '../style/mediaQueries';

import HeroTitle from './HeroTitle';

const LargeHeroTitle = styled(HeroTitle)`
  font-size: 1.4rem;
  height: calc(1.4rem * 4);

  @media (max-width: 1164px) {
    height: calc(1.4rem * 7);
  }

  ${media.desktop`
    height: calc(1.4rem * 3);
  `}

  ${media.tablet`
    height: calc(1.4rem * 4);
  `}

  ${media.phone`
    height: calc(1.4rem * 7.5);
  `}
`;

export default () => {
  const ref = React.createRef();
  const strings = [
    'Francophile, <em>depuis que je vis et travaille au nord de la France</em>',
    'owner of two Nikon DSLRs, ^1000 and nowhere near as many lenses as I want',
    'cheese connoisseur',
    'lover of country walks with dogs',
    'master of a spicy curry',
    'adopted east Londoner',
    'Hackney Wickian',
    'Loughborough University alumnus',
    'Midlander in exile in the South (voluntarily)',
    'dog person',
    'drinker of pretentious craft beer',
    'Leicester native',
    'surprisingly articulate primate',
    'whisky aficionado',
    'chronic loser at Scrabble',
    'cyclist (not the Lycra-wearing kind)',
    'former ERASMUS student',
  ];

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: strings.map(string => `${string}.`),
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2500,
      shuffle: true,
      loop: true,
      smartBackspace: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <LargeHeroTitle>
      I&apos;m a fullstack JavaScript developer, photographer, and <span ref={ref} />
    </LargeHeroTitle>
  );
};
