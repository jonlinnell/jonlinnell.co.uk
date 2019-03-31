import React from 'react';
import styled from 'styled-components';

import downArrow from '../images/down.png';

const AnchoredArrow = styled.img`
  position: fixed;
  left: calc(50vw - 8px);

  pointer-events: none;

  transition: all ease-in-out 0.3s;
  bottom: ${({ minimised }) => (minimised ? '110vh' : '2vh')};
  opacity: ${({ minimised }) => (minimised ? 0 : 1)};
`;

export default ({ minimised }) => (
  <AnchoredArrow minimised={minimised} src={downArrow} alt="gee doon" />
);
