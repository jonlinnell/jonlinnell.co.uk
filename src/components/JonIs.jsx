import React, { useEffect } from 'react';
import Typed from 'typed.js';

import HeroTitle from './HeroTitle';

export default () => {
  const ref = React.createRef();
  const strings = [
    'Francophile, <em>depuis que je travaille en France</em>',
    'owner of two Nikon DSLRs, ^1000 and not as many lenses as I want',
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
    'hipster parody',
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
    <HeroTitle style={{ fontSize: '1.3rem' }}>
      I&apos;m a fullstack JavaScript developer, photographer, and <span ref={ref} />
    </HeroTitle>
  );
};
