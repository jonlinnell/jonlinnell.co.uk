import React from 'react';
import Helmet from 'react-helmet';
import { SiteData } from 'react-static';

const App = () => (
  <SiteData>
    {({ title }) => (
      <React.Fragment>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <div>
Hi, welcome to
          {' '}
          {title}
&apos;s site.
        </div>
      </React.Fragment>
    )}
  </SiteData>
);

export default App;
