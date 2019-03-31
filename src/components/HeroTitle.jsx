import styled from 'styled-components';

import media from '../style/mediaQueries';

export default styled.h1`
  font-size: 1.5rem;
  font-weight: 300;

  margin: 0;

  color: white;

  margin-bottom: 1rem;

  ${({ responsive }) => (
    responsive
      ? media.phone`
          font-size: 1.2rem;
        `
      : ''
  )}
`;
