import React from 'react'
import { Link } from 'react-static'
import { NavbarItem } from 'bloomer'

export default ({
  children,
  ...rest
}) => (
  <NavbarItem
    render={Link}
    {...rest}
  >
    {children}
  </NavbarItem>
)
