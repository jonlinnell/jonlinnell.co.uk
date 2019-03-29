import React, { useEffect } from 'react';
import Typed from 'typed.js';

export default () => {
  const ref = React.createRef();
  const strings = [
    'Francophile, <em>depuis que je vis et travaille au nord de la France</em>',
    'cheese connoisseur',
    'lover of country walks with dogs',
    'maker of excellent food',
    'master of a spicy curry',
    'owner of two Nikon DSLRs, ^1000 and nowhere near as many lenses as I want',
    'adopted east Londoner',
    'Hackney Wickian',
    'Loughborough University alumnus',
    'Midlands native exiled in the South',
    'dog walker',
    'unashamed craft beer fan',
    'Leicester native',
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

  return <span ref={ref} />;
};
