import styled from 'styled-components'

const CVContainer = styled.div`
  @media only screen and (min-width: 960px) {
    margin-top: 48px;
  }

  & > div {
    margin-top: 48px;
  }

  & > div:first-child {
    margin-top: 0;
  }
`

export default CVContainer
