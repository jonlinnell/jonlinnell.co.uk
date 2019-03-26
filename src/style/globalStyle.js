import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400');

  html {
    box-sizing: border-box;
    font-size: 16pt;
  }

  *, *:after, *:before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Montserrat', 'Helvetica', sans-serif;
  }
`;

export default GlobalStyle;
