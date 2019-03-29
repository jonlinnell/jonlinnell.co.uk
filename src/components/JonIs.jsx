import React, { useEffect } from 'react';
import Typed from 'typed.js';

import HeroTitle from './HeroTitle';

export default () => {
  const ref = React.createRef();
  const strings = [
    'cheese connoisseur',
    'lover of country walks with dogs',
    'master of a spicy curry',
    'owner of two Nikon DSLRs, ^1000 and nowhere near as many lenses as I want',
    'adopted east Londoner',
    'Hackney Wickian',
    'Loughborough University alumnus',
    'Francophile, <em>depuis que je vis et travaille au nord de la France</em>',
    'Midlander exiled in the South',
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
    <HeroTitle>
      I&apos;m a fullstack JavaScript developer, photographer, and <span ref={ref} />
    </HeroTitle>
  );
};
