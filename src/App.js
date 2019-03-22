import React from 'react';
import { Root, Routes, withSiteData } from 'react-static';

import GlobalStyle from './style/globalStyle';

const App = withSiteData(({ title }) => {
  document.title = title;
  return (
    <Root>
      <GlobalStyle />
      <Routes />
    </Root>
  );
});

export default App;
