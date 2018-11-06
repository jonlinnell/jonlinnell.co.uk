import React, { Fragment } from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'

import 'normalize.css'
import 'font-awesome/css/font-awesome.min.css'

import 'bulma/css/bulma.min.css'

import './bulmaswatch.min.css'

/* eslint-disable-next-line import/no-unresolved */
import Routes from 'react-static-routes'

const App = () => (
  <Router>
    <Fragment>
      <Routes />
    </Fragment>
  </Router>
)

export default hot(module)(App)
