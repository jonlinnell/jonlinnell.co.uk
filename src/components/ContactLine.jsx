import React from 'react'
import styled from 'styled-components'
import { Icon } from 'bloomer'

const links = {
  Email: 'mailto:',
  Phone: 'tel:',
  Website: 'https://',
  Facebook: 'https://facebook.com/',
  Twitter: 'https://twitter.com/',
  Linkedin: 'https://linkedin.com/in/',
  Instagram: 'https://instagram.com/',
  GitHub: 'https://github.com/',
}

const generatePlatformLink = (platform, description) => `${links[platform]}${description}`

const ContactLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-items: center;
`

const ContactInfo = styled.a`
  margin-left: 8px;
  color: white;

  &:hover {
    text-decoration: underline;
    color: ${({ theme: { primary } }) => primary};
  }
`

export default ({ icon, platform, description }) => (
  <ContactLine>
    <Icon className={`fa ${icon}`} />
    <ContactInfo href={generatePlatformLink(platform, description)} target="_blank">{ description }</ContactInfo>
  </ContactLine>
)
