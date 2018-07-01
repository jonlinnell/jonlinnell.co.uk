import React from 'react'
import Link from 'gatsby-link'
import {
  Section,
  Title,
} from 'bloomer'

const SecondPage = () => (
  <Section>
    <Title isSize={1}>Hi from the second page</Title>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Section>
)

export default SecondPage
