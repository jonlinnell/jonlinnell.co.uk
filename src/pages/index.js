import React from 'react'
import Link from 'gatsby-link'
import {
  Column,
  Columns,
  Container,
  Hero,
  HeroBody,
  HeroHeader,
  Section,
  Title,
} from 'bloomer'

import WhatAmI from '../components/WhatAmI'

const columnSize = {
  mobile: 12,
  default: 3
}

const IndexPage = () => (
  <div>
    <Hero
      isFullHeight
      isColor="primary"
      className="welcome-hero"
    >
      <HeroBody>
        <Container>
          <Title isSize={1}>Hello, I'm Jon</Title>
          <WhatAmI />
          <Link to="/page-2">See more of my work here.</Link>
        </Container>
      </HeroBody>
    </Hero>

    <Section className='about'>
      <Title style={{ textAlign: 'center' }} isSize={3}>This is some more content</Title>
      <Columns isCentered>
        <Column isSize={columnSize} isOffset={{ mobile: 0, default: 2 }}>
          <p>test</p>
        </Column>
        <Column isSize={columnSize}>
          <p>test</p>
        </Column>
        <Column isSize={columnSize}>
          <p>test</p>
        </Column>
      </Columns>
    </Section>
  </div>
)

export default IndexPage
