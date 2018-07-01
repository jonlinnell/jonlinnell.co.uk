import React from 'react'
import {
  Hero,
  HeroHeader,
  HeroBody,
  Title
} from 'bloomer'

const NotFoundPage = () => (
  <Hero isFullHeight isColor="danger">
    <HeroHeader>
      <Title isSize={1}>NOT FOUND</Title>
    </HeroHeader>
    <HeroBody>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </HeroBody>
  </Hero>
)

export default NotFoundPage
