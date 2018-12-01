import React from 'react'
import qh from 'quick-hash'

import { Columns, Column } from 'bloomer'

const COLUMNS = 3

const Summary = ({ summary }) => {
  const columns = summary.splice(0, COLUMNS)

  return (
    <Columns>
      {
        columns.map(column => (
          <Column key={qh(JSON.stringify(column))} isSize={`1/${COLUMNS}`}>
            {
              column.map(paragraph => <p key={qh(paragraph)}>{ paragraph }</p>)
            }
          </Column>
        ))
      }
    </Columns>
  )
}

export default Summary
