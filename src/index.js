import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'

// Your top level component
import App from './App'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
}

  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = (Comp) => {
    renderMethod(
      <Fragment>
        <GlobalStyle />
        <Comp />
      </Fragment>,
      document.getElementById('root')
    )
  }

  // Render!
  render(App)
}

// Export your top level component as JSX (for static rendering)
export default App
