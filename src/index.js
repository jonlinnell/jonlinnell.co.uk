/* eslint-disable global-require */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';

// Your top level component
import App from './App';

// Export your top level component as JSX (for static rendering)
export default App;

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render;
  const render = (Comp) => {
    renderMethod(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <AppContainer>
            <Comp />
          </AppContainer>
        </React.Fragment>
      </ThemeProvider>,
      document.getElementById('root')
    );
  };

  // Render!
  render(App);

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept('./App', () => render(require('./App').default));
  }
}
