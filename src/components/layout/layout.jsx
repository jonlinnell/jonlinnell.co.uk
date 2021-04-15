import Head from "next/head";
import Link from "next/link";
import { useThemeContext, DARK, LIGHT } from "../../context/theme";

export default function Layout({ children }) {
  const { theme, toggleDarkMode } = useThemeContext();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 border-t-4 text-gray-900 dark:text-white border-brand-primary dark:border-brand-lightest min-h-screen flex flex-col place-items-center justify-start sm:justify-between">
      <Head>
        <title>Jon Linnell</title>
        <link rel="shortcut icon" type="image/png" href="/icon.png" />
      </Head>

      <header className="p-2 md:p-4 min-w-full flex gap-2 justify-start">
        <Link href="/">Jon Linnell</Link>
        <nav className="ml-auto flex gap-3">
          <Link href="/about">about me</Link>
          <button className="text-brand-dark dark:text-brand-lightest" onClick={toggleDarkMode}>
            {theme === DARK ? "D" : "L"}
          </button>
        </nav>
      </header>

      {children}

      <footer className="text-sm font-extralight text-brand-dark mt-auto sm:m-0 pb-2 text-center">
        &copy; {new Date().getFullYear()} Jon Linnell
      </footer>
    </div>
  );
}
