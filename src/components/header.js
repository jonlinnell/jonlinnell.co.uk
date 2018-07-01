import React, { PureComponent } from 'react'
import Link from 'gatsby-link'
import {
  Icon,
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarEnd,
  NavbarItem,
  NavbarLink,
  NavbarMenu,
  NavbarStart,
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
          <NavbarStart>
            <NavbarItem>
              <Link to="/page-2">Page 2</Link>
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem>
              <Icon isSize="medium" style={{ color: '#55acee' }} className="fa fa-twitter" />
            </NavbarItem>
            <NavbarItem>
              <Icon isSize="medium" className="fa fa-github" />
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    )
  }
}

export default Header
