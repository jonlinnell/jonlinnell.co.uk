import React from 'react'

import { Columns, Column } from 'bloomer'

const Summary = ({ col1, col2, col3 }) => (
  <Columns>
    <Column isSize="1/3">
      <p>{ col1 }</p>
    </Column>
    <Column isSize="1/3">
      <p>{ col2 }</p>
    </Column>
    <Column isSize="1/3">
      <p>{ col3 }</p>
    </Column>
  </Columns>
)

export default Summary
