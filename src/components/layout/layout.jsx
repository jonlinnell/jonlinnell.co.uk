import Head from "next/head";
import cn from "classnames";
import Nav from "../nav";
import Footer from "../footer";

export default function Layout({ children, alignCenter, title = "", classNames = [] }) {
  return (
    <div
      className={cn([
        "border-t-8",
        "border-brand-primary",
        "text-gray-900",
        "dark:text-gray-100",
        "min-h-screen",
        "grid",
        "grid-flow-row",
        "grid-rows-[auto_1fr_auto]",
      ])}
    >
      <Head>
        <title>{title ? `${title} | ` : ""}Jon Linnell</title>
        <link rel="shortcut icon" type="image/png" href="/icon.png" />
      </Head>

      <Nav />

      <div
        className={cn(
          ["p-2", "md:p-6", "m-0", "mx-auto"],
          alignCenter ? "place-content-center flex flex-col" : [],
          classNames
        )}
      >
        {children}
      </div>

      <Footer />
    </div>
  );
}
