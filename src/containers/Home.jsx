import React from 'react';

import { withSiteData } from 'react-static';

const Home = ({ title }) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>
Welcome to
      {title}
    </h1>
  </div>
);

export default withSiteData(Home);
