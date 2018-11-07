import React from 'react'
import styled from 'styled-components'

const Institution = styled.p`
  font-size: 16px;
`

const Dates = styled.p`
  font-size: 14px;
  font-weight: 200;
`

const Qualifications = styled.p`
  font-size: 18px;
`

const QualificationContainer = styled.li`
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export default ({
  start,
  end,
  qualifications,
  institution,
}) => (
  <QualificationContainer>
    <Qualifications>{ qualifications }</Qualifications>
    <Institution>{institution}</Institution>
    <Dates>
      {start}
      &mdash;
      {end}
    </Dates>
  </QualificationContainer>
)
