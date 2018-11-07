import React from 'react'
import styled from 'styled-components'

const Skill = styled.li`
  margin-bottom: 12px;
`

const Title = styled.h2`
  font-weight: 400;
  font-size: 24px;
`

const Details = styled.div`
  & > p {
    margin-bottom: 6px;
  }
`

export default ({ title, children }) => (
  <Skill>
    <Title>{ title }</Title>
    <Details>{ children }</Details>
  </Skill>
)
