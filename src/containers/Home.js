import React from 'react'
import styled from 'styled-components'
import { withSiteData } from 'react-static'

import {
  Hero,
  HeroBody,
  Title,
} from 'bloomer'

const SignOff = styled.em`
  display: block;
  margin-bottom: 32px;
`

export default withSiteData(() => (
  <Hero isColor="light" isSize="large">
    <HeroBody>
      <Title>Hi, I&apos;m Jon Linnell.</Title>
      <p>
        I build websites, full-stack web apps, take photos, manage projects,
        and cook excellent food.
      </p>
      <p>
        If you&apos;re on this page, it means you&apos;ve taken the /cv off the end of the URL
        on a coveringletter or job application, possibly in the hopes of finding out more about me.
      </p>
      <p>
        To tell you the truth, I&apos;d do the same, but I&apos;m currently in the process of
        rebuilding this website, so there&apos;s nothing to see here right now.
      </p>
      <p>
        Soon there will be a blog, a huge photo gallery showcasing my work, and also a more detailed
        overview of my web and other coding projects.
      </p>
      <p>
        In the meantime, please&nbsp;
        <a href="mailto:jonlinnell@icloud.com">send me an email</a>
        &nbsp;and let me know how/why you&apos;re here, and what I can do to help answer your
        questions.
      </p>
      <SignOff>~ Jon, Nov &apos;18</SignOff>
      <a href="/cv">Click here</a>
        &nbsp;to go back to my CV.
    </HeroBody>
  </Hero>
))
