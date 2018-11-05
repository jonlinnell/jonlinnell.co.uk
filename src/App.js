import React, { Fragment } from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'

import 'normalize.css'

/* eslint-disable-next-line import/no-unresolved */
import Routes from 'react-static-routes'

import Navbar from './components/Navbar'

const App = () => (
  <Router>
    <Fragment>
      <Navbar>
        <Link exact to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </Navbar>
      <div className="content">
        <Routes />
      </div>
    </Fragment>
  </Router>
)

export default hot(module)(App)
