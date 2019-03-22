import React from 'react';
import { withSiteData } from 'react-static';

export default withSiteData(({ title }) => (
  <div style={{ textAlign: 'center' }}>
    <h1>Hi, I&apos;m {title}.</h1>
  </div>
));
