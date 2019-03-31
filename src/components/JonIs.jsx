import React, { useEffect } from 'react';
import Typed from 'typed.js';

import HeroTitle from './HeroTitle';

export default () => {
  const ref = React.createRef();
  const strings = [
    'Francophile, <em>depuis que je travaille en France</em>',
    'owner of two Nikon DSLRs,^700 and not as many lenses as I would like',
    'cheese connoisseur',
    'lover of long country walks with dogs',
    'master of a spicy curry,^700 both cooking and eating',
    'adopted east Londoner',
    'Hackney Wickian',
    'Loughborough University alum',
    'Midlander in exile in the South^700 (voluntarily)',
    'dog person',
    'owner of a genuine South African vuvuzela^700 (which my neighbours are thrilled about)',
    'drinker of pretentious/delicious craft beer',
    'Leicester native',
    'surprisingly articulate primate',
    'whisky aficionado',
    'chronic loser at Scrabble',
    'cyclist (not the Lycra-wearing kind)',
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
    <HeroTitle responsive>
      I&apos;m a fullstack JavaScript developer, photographer, and <span ref={ref} />
    </HeroTitle>
  );
};
