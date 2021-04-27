import 'normalize.css';
import { ThemeProvider } from '@emotion/react';
import { globalStyles } from '../styles/styles';
import themes, { LIGHT } from '../styles/themes';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={themes[LIGHT]}>
        {globalStyles}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
