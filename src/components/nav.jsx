import classNames from "classnames";
import Link from "next/link";
import ToggleDarkMode from "./toggle-dark-mode";

export default function Nav({ }) {
  return (
    <header className="p-2 md:p-4 min-w-full flex gap-2 justify-start">
      <Link href="/">
        <span className={classNames(["text-brand-primary", "hover:cursor-pointer"])}>
          Jon Linnell
        </span>
      </Link>
      <nav className="ml-auto flex gap-3">
        <Link href="/articles">writing</Link>
        <Link href="/photography">photo</Link>
        <Link href="/about">about me</Link>

        <ToggleDarkMode />
      </nav>
    </header>
  );
}
