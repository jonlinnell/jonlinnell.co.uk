import styled from 'styled-components';

import media from '../style/mediaQueries';

const Page = styled.section`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ alignStartOnPhone }) => (alignStartOnPhone
    ? media.phone`
        justify-content: start;
      `
    : '')}
`;

export default Page;
