<<<<<<< HEAD
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';

export default App;

if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
  const render = (Comp) => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      document.getElementById('root')
    );
  };

  render(App);

  if (module.hot) {
    module.hot.accept('./App', () => {
      // eslint-disable-next-line
      render(require('./App').default);
    });
=======
import React from 'react';
import ReactDOM from 'react-dom';

// Your top level component
import App from './App';

// Export your top level component as JSX (for static rendering)
export default App;

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot
    ? ReactDOM.render
    : ReactDOM.hydrate || ReactDOM.render;

  const render = (Comp) => {
    renderMethod(<Comp />, document.getElementById('root'));
  };

  // Render!
  render(App);

  // Hot Module Replacement
  if (module.hot) {
    // eslint-disable-next-line
    module.hot.accept('./App', () => render(require('./App').default));
>>>>>>> deb514e9d209d21ae35d9e641312b1dd0d641459
  }
}
