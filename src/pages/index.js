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
  default: 4
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
          <Link to="/page-2">See more of my work here &rarr;</Link>
        </Container>
      </HeroBody>
    </Hero>

    <Section className='about'>
      <Container>
        <Title style={{ textAlign: 'center' }} isSize={3}>Things I do</Title>
        <Columns isCentered>
          <Column isSize={columnSize} hasTextAlign="centered">
            <Title isSize={5}>Web Development</Title>
          </Column>
          <Column isSize={columnSize} hasTextAlign="centered">
            <Title isSize={5}>Photography</Title>
          </Column>
          <Column isSize={columnSize} hasTextAlign="centered">
            <Title isSize={5}>Systems Administration</Title>
          </Column>
        </Columns>
      </Container>
    </Section>
  </div>
)

export default IndexPage
