import React from 'react'
import {
  Footer,
  Content
} from 'bloomer'

const currentDate = new Date

const SiteFooter = () => (
  <Footer id="footer">
    <Content>
      &copy;&nbsp;{currentDate.getFullYear()} Jon Linnell
    </Content>
  </Footer>
)

export default SiteFooter
