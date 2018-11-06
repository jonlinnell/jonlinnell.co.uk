import React from 'react'
import styled from 'styled-components'
import { Icon } from 'bloomer'

const ContactLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-items: center;
`

const ContactInfo = styled.a`
  margin-left: 8px;

  &:hover {
    text-decoration: underline;
    color: ${({ theme: { primary } }) => primary};
  }
`

export default ({ iconClass, children, href }) => (
  <ContactLine>
    <Icon className={`fa ${iconClass}`} />
    <ContactInfo href={href} target="_blank">{ children }</ContactInfo>
  </ContactLine>
)
