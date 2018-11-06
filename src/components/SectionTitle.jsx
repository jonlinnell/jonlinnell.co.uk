import React from 'react'
import styled from 'styled-components'
import { Title } from 'bloomer'

const SectionTitle = styled(Title)`
  border-bottom: 1px solid ${({ theme: { primary } }) => primary};
  padding-bottom: 12px;
  margin-bottom: 12px;
`

export default ({ children }) => (
  <SectionTitle>
    { children }
  </SectionTitle>
)
