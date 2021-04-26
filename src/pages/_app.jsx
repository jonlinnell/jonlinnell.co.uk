import 'normalize.css';
import { ThemeProvider } from '@emotion/react';
import { globalStyles } from '../shared/styles';

export default function App({ Component, pageProps }) {
  return (
    <>
      {globalStyles}
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
