import React from 'react'
import styled from 'styled-components'

import ContactLine from './ContactLine'

const Contacts = styled.ul`
  & > li {
    margin: 4px 0;
  }

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`

export default ({ contacts }) => (
  <Contacts>
    {
      contacts.map(contact => (
        <ContactLine key={contact.platform} {...contact} />
      ))
    }
  </Contacts>
)
