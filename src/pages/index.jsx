import cn from "classnames";
import InlineHighlight from "../components/inline-highlight";
import Keywords from "../components/keywords";
import Layout from "../components/layout";
import Prose from "../components/prose";
import { getArticles } from "../lib/articles";

export async function getStaticProps() {
  const articles = await getArticles({ limit: 5 });

  return { props: { articles } };
}

export default function Home({ articles }) {
  const articleItems = articles.map((article) => (
    <li key={article.slug}>
      <a className="flex sm:flex-row flex-col align-items-end" href={`/articles/${article.slug}`}>
        <h5 className="text-brand-primary">{article.title}</h5>
        <div className="text-sm ml-auto w-100 flex gap-2 mb-4 sm:mb-0">
          <Keywords>{article.keywords}</Keywords>
          <div>
            {new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(article.date)}
          </div>
        </div>
      </a>
    </li>
  ));

  return (
    <Layout alignCenter={true}>
      <Prose
        className="text-center prose-lg md:text-left md:mb-64 prose-h1:text-5xl prose-h1:font-thin"
        id="who-am-i"
      >
        <h1>Hello, I'm Jon 👋🏻</h1>
        <p>
          I'm a <InlineHighlight>software engineer</InlineHighlight>,{" "}
          <a className={cn(["no-underline"])} href="/photography">
            <InlineHighlight>photographer</InlineHighlight>
          </a>
          , and <InlineHighlight>general purpose nerd</InlineHighlight> based in London.
        </p>
      </Prose>
      <section id="articles" className="mt-32 sm:mt-16 invisible">
        <h2 className="mb-2">🧻 Recent Posts</h2>
        <ul>{articleItems}</ul>
      </section>
    </Layout>
  );
}
