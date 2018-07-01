import React, { PureComponent } from 'react'
import Link from 'gatsby-link'
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarBurger,
  NavbarLink
} from 'bloomer'

class Header extends PureComponent {
  constructor() {
    super()

    this.state = {
      burgerActive: false
    }
  }

  render() {
    return (
      <Navbar>
        <NavbarBrand>
          <NavbarItem>
            <Link to="/">
              {this.props.siteTitle}
            </Link>
          </NavbarItem>
          <NavbarBurger
            isActive={this.state.burgerActive}
            onClick={() => this.setState({ burgerActive: !this.state.burgerActive })}
          />
        </NavbarBrand>
        <NavbarMenu isActive={this.state.burgerActive}>
          <NavbarItem>
            <Link to="/page-2">Page 2</Link>
          </NavbarItem>
        </NavbarMenu>
      </Navbar>
    )
  }
}

export default Header
