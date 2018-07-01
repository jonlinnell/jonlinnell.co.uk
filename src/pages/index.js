import React from 'react'
import Link from 'gatsby-link'
import {
  Container,
  Title
} from 'bloomer'

const IndexPage = () => (
  <Container>
    <Title isSize={1}>Just a test at the moment</Title>
    <Link to="/page-2">Click here to try another page</Link>
  </Container>
)

export default IndexPage
