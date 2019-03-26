import React from 'react';
import { Router, Link } from 'react-static';

// eslint-disable-next-line import/no-unresolved
import Routes from 'react-static-routes';

import './app.css';

export default () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
);
