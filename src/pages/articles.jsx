import classNames from "classnames";
import { format } from "date-fns";
import Layout from "../components/layout";
import Keywords from "../components/keywords";
import { getArticles } from "../lib/articles";

export async function getStaticProps() {
  const articles = await getArticles({ limit: 5 });

  return { props: { articles } };
}

function Article({ slug, title, keywords, date: rawDate }) {
  const date = new Date(rawDate);
  return (
    <li key={slug} className={classNames(["py-6", "md:py-3"])}>
      <a href={`/articles/${slug}`}>
        <h2 className={classNames(["text-3xl", "font-thin"])}>
          <span className={classNames(["text-brand-primary", "text-3xl"])}>☛</span>&nbsp;{title}
        </h2>

        <div className={classNames(["flex", "mt-2", "text-sm", "md:text-base"])}>
          <p className={classNames(["hidden", "md:block"])}>{format(date, "eeee do MMMM yyyy")}</p>
          <p className={classNames(["block", "md:hidden"])}>{format(date, "dd/MM/yyyy")}</p>
          <div className="ml-4">
            <Keywords>{keywords}</Keywords>
          </div>
        </div>
      </a>
    </li>
  );
}

function Articles({ articles }) {
  return (
    <Layout title="Articles" classNames="max-w-prose w-11/12">
      <h1
        className={classNames([
          "text-brand-primary",
          "py-2",
          "text-3xl",
          "lg:text-5xl",
          "font-thin",
        ])}
      >
        Articles 🧻
      </h1>
      <ul>
        {articles?.map((article) => (
          <Article {...article} />
        ))}
      </ul>
    </Layout>
  );
}

export default Articles;
