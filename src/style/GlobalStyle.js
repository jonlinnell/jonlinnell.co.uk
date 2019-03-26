import { createGlobalStyle } from 'styled-components';
import './normalize.css';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 12pt;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {

  }
`;

export default GlobalStyle;
