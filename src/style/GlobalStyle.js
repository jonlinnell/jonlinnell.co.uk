import { createGlobalStyle } from 'styled-components';
import './normalize.css';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16pt;
    font-family: "Montserrat", sans-serif;
    color: ${({ theme: { textPrimary } }) => textPrimary};
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    
  }
`;

export default GlobalStyle;
