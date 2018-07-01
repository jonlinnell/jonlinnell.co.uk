import React from 'react'
import Link from 'gatsby-link'
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
} from 'bloomer'

const Header = ({ siteTitle }) => (
  <Navbar>
    <NavbarBrand>
      <NavbarItem>
        <Link to="/">
          {siteTitle}
        </Link>
      </NavbarItem>
    </NavbarBrand>
  </Navbar>
)

export default Header
