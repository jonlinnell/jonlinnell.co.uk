import classNames from "classnames";

export default function Footer({}) {
  return (
    <footer
      className={classNames([
        "text-sm",
        "font-extralight",
        "text-brand-dark",
        "mt-auto",
        "sm:m-0",
        "pb-2",
        "text-center",
      ])}
    >
      &copy; {new Date().getFullYear()} Jon Linnell
    </footer>
  );
}
