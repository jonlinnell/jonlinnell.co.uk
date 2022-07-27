import Link from "next/link";
import { useThemeContext, DARK } from "../context/theme";

export default function Nav({}) {
  const { theme, toggleDarkMode } = useThemeContext();

  return (
    <header className="p-2 md:p-4 min-w-full flex gap-2 justify-start">
      <Link href="/">
        <span className="text-brand-primary hover:cursor-pointer">Jon Linnell</span>
      </Link>
      <nav className="ml-auto flex gap-3">
        <Link href="/about">about me</Link>
        <button className="text-brand-dark dark:text-brand-lightest" onClick={toggleDarkMode}>
          {theme === DARK ? "🌚" : "🌞"}
        </button>
      </nav>
    </header>
  );
}
