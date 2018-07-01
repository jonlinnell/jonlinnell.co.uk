import React from 'react'
import Link from 'gatsby-link'
import {
  Container,
  Hero,
  HeroBody,
  HeroHeader,
  Title,
} from 'bloomer'

const IndexPage = () => (
  <Hero isFullHeight isColor="primary">
    <HeroBody>
      <Container>
        <Title isSize={1}>Just a test at the moment</Title>
        <Link to="/page-2">Click here to try another page</Link>
      </Container>
    </HeroBody>
  </Hero>
)

export default IndexPage
