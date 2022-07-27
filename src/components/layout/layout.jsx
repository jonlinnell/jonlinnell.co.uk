import Head from "next/head";
import Link from "next/link";
import { useThemeContext, DARK } from "../../context/theme";
import cn from "classnames";

export default function Layout({ children, alignCenter }) {
  const { theme, toggleDarkMode } = useThemeContext();

  return (
    <div className="border-t-4 text-gray-900 dark:text-white border-brand-primary dark:border-brand-lightest min-h-screen flex flex-col align-middle sm:justify-between">
      <Head>
        <title>Jon Linnell</title>
        <link rel="shortcut icon" type="image/png" href="/icon.png" />
      </Head>

      <header className="p-2 md:p-4 min-w-full flex gap-2 justify-start">
        <Link href="/">Jon Linnell</Link>
        <nav className="ml-auto flex gap-3">
          <Link href="/about">about me</Link>
          <button className="text-brand-dark dark:text-brand-lightest" onClick={toggleDarkMode}>
            {theme === DARK ? "🌚" : "🌞"}
          </button>
        </nav>
      </header>

      <div
        className={cn(
          alignCenter
            ? "place-item-center align-middle justify-items-center"
            : "place-items-start flex-grow"
        )}
      >
        {children}
      </div>

      <footer className="text-sm font-extralight text-brand-dark mt-auto sm:m-0 pb-2 text-center">
        &copy; {new Date().getFullYear()} Jon Linnell
      </footer>
    </div>
  );
}
