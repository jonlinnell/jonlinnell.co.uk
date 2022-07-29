import classNames from "classnames";

export default function Footer({}) {
  return (
    <footer
      className={classNames([
        "text-sm",
        "font-light",
        "text-brand-contrast",
        "mt-auto",
        "sm:m-0",
        "pb-12",
        "sm:pb-4",
        "text-center",
      ])}
    >
      &copy; {new Date().getFullYear()} Jon Linnell
    </footer>
  );
}
