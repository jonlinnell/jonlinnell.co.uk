import "tailwindcss/tailwind.css";
import { ThemeProvider } from "../context/theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
