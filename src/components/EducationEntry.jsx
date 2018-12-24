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

const EducationEntryContainer = styled.li`
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export default ({
  startDate,
  endDate,
  qualifications,
  institution,
}) => (
  <EducationEntryContainer>
    <Qualifications>{ qualifications }</Qualifications>
    <Institution>{ institution }</Institution>
    <Dates>
      { startDate }
      &mdash;
      { endDate }
    </Dates>
  </EducationEntryContainer>
)
