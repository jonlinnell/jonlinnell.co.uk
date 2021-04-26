import Head from "next/head";
import Link from "next/link";
import { useThemeContext, DARK, LIGHT } from "../../context/theme";

export default function Layout({ children }) {
  const { theme, toggleDarkMode } = useThemeContext();

  return (
    <div>
      <Head>
        <title>Jon Linnell</title>
        <link rel="shortcut icon" type="image/png" href="/icon.png" />
      </Head>

      <header>
        <Link href="/">Jon Linnell</Link>
        <nav>
          <Link href="/about">about me</Link>
          <button onClick={toggleDarkMode}>{theme === DARK ? "D" : "L"}</button>
        </nav>
      </header>

      {children}

      <footer>&copy; {new Date().getFullYear()} Jon Linnell</footer>
    </div>
  );
}
