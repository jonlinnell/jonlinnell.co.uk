import { createGlobalStyle } from 'styled-components';
import './normalize.css';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito:200,300');

  html {
    box-sizing: border-box;
    font-size: 16pt;
    font-family: "Nunito", sans-serif;
    color: ${({ theme: { textPrimary } }) => textPrimary};
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    
  }
`;

export default GlobalStyle;
