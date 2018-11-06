import React from 'react'
import styled from 'styled-components'

const ProfilePicture = styled.img`
    display: block;
    width: 100%;
    height: auto;
    border-radius: 50%;
    margin: 12px 0;
`

export default ({ image }) => (
  <ProfilePicture src={image} alt="this is my face" />
)
