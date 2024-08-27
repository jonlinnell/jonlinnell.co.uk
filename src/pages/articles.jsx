import classNames from "classnames";
import { format } from "date-fns";
import Layout from "../components/layout";
import Keywords from "../components/keywords";
import { getArticles } from "../lib/articles";
import Heading from "../components/heading";

export async function getStaticProps() {
  const articles = await getArticles();

  return { props: { articles } };
}

function Article({ slug, title, keywords, date: rawDate }) {
  const date = new Date(rawDate);
  return (
    <li key={slug} >
      <a href={`/articles/${slug}`}>
        <Heading variant="h3" className={classNames(['dark:text-white', 'text-black'])}>
          <span className={classNames(["text-3xl", "w-full"])}>☛</span>&nbsp;{title}
        </Heading>

        <div className={classNames(["flex", "mt-2", "text-sm", "md:text-base", "text-brand-primary"])}>
          <p>{format(date, "do MMMM yyyy")}</p>
          <div className="ml-4">
            <Keywords>{keywords}</Keywords>
          </div>
        </div>
      </a>
    </li>
  );
}

function ArticleMini({ slug, title, keywords, date: rawDate }) {
  const date = new Date(rawDate);

  return (
    <li key={slug} className={classNames(["md:flex", "md:flex-row", "md:flex-start"])}>
      <a className={classNames(["underline"])} href={`/articles/${slug}`}>
        {title}
      </a>
      <Keywords className={classNames(["text-sm", "ml-auto"])}>{keywords}</Keywords>
      <span className={classNames(["text-sm"])}>{format(date, "dd/MM/yyyy")}</span>
    </li>
  );
}

function Articles({ articles }) {
  const archiveArticles = articles.reduce((acc, cur) => {
    const label = format(cur.date, "MMMM yyyy");

    return { ...acc, [label]: [...(acc[label] || []), cur] };
  }, {});

  return (
    <Layout title="Articles" classNames="max-w-prose">
      <Heading variant="h1">Recent Posts 🧻</Heading>
      <ul className={classNames(["mt-0"])}>
        {articles?.slice(0, 3).map((article) => (
          <Article {...article} />
        ))}
      </ul>
      <Heading variant="h2" className={classNames(["mt-12", "md:mt-24"])}>
        All Posts
      </Heading>
      <ul>
        {Object.entries(archiveArticles).map(([month, articlesForMonth]) => (
          <>
            <Heading variant="h5">{month}</Heading>
            <ul>
              {articlesForMonth.map((article) => (
                <ArticleMini {...article} />
              ))}
            </ul>
          </>
        ))}
      </ul>
    </Layout>
  );
}

export default Articles;
