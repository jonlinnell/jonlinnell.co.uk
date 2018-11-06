import React from 'react'
import { withSiteData } from 'react-static'

import {
  Hero,
  HeroBody,
  HeroHeader,
  HeroFooter
} from 'bloomer'

export default withSiteData(() => (
  <Hero isColor="light" isSize="large">
    <HeroHeader></HeroHeader>
    <HeroBody>
      <h1>Hi, I&apos;m Jon Linnell.</h1>
      <p>I build websites, full-stack web apps, take photos, manage projects, and cook excellent food.</p>
    </HeroBody>
    <HeroFooter></HeroFooter>
  </Hero>
))
