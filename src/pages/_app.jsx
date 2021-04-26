import { ThemeProvider } from "../context/theme";
import { globalStyles } from "../shared/styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      {globalStyles}
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
