import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import netlifyIdentity from 'netlify-identity-widget'

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

const theme = {
  primary: 'rgb(255, 100, 0)',
}

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = (Comp) => {
    renderMethod(
      <Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Comp />
        </ThemeProvider>
      </Fragment>,
      document.getElementById('root')
    )
  }

  document.createElement('div')
  netlifyIdentity.init()

  // Render!
  render(App)
}

// Export your top level component as JSX (for static rendering)
export default App
