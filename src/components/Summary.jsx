import React from 'react'
import qh from 'quick-hash'

import { Columns, Column } from 'bloomer'

const COLUMNS = 3

const Summary = ({ summary }) => {
  const columns = summary.splice(0, COLUMNS)

  console.log(JSON.stringify(`Columns: ${columns}`, null, 2))

  return (
    <Columns>
      {
        columns.map(column => (
          <Column key={qh(JSON.stringify(column))} isSize={`1/${COLUMNS}`}>
            {
              console.log(JSON.stringify(`single column: ${column}`, null, 2))
            }
            {
              column.map((paragraph) => {
                console.log(JSON.stringify(paragraph))
                return <p key={qh(paragraph)}>{ paragraph }</p>
              })
            }
          </Column>
        ))
      }
    </Columns>
  )
}

export default Summary
