import styled, { css } from 'styled-components'

export default styled.button`
  border: none;
  background: none;
  color: rgb(140, 140, 140);
  font-style: italic;
  padding: 6px;
  margin-left: auto;

  &:focus {
    outline: none;
  }

  ${({ responsiveShift }) => (responsiveShift ? css`
    @media screen and (min-width: 767px) {
      position: relative;
      top: -24px;
    }
  ` : null)}
`
