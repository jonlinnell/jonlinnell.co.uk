import Head from "next/head";
import cn from "classnames";
import Nav from "../nav";
import Footer from "../footer";

export default function Layout({ children, alignCenter, title }) {
  return (
    <div
      className={cn([
        "border-t-4",
        "text-gray-900",
        "dark:text-white",
        "border-brand-primary",
        "dark:border-brand-lightest",
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

      <div className={cn([], alignCenter ? "place-content-center flex" : "place-items-start ")}>
        {children}
      </div>

      <Footer />
    </div>
  );
}
