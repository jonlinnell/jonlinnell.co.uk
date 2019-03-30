import styled from 'styled-components';

import media from '../style/mediaQueries';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: -1;

  background-color: ${({ theme }) => theme.backgroundColor || 'slategrey'};

  margin: ${({ minimised }) => (minimised ? '32px 32px calc(32px + 0.75rem) 32px' : 0)};

  ${media.desktop`
    margin: ${({ minimised }) => (minimised ? '24px 24px calc(32px + 0.5rem) 24px' : 0)};
  `}

  ${media.phone`
    margin: ${({ minimised }) => (minimised ? '8px 8px calc(8px + 0.75rem) 8px' : 0)};
  `}

  transition: margin ease-out 0.3s;
`;

export default Background;
