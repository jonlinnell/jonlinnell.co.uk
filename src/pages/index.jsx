import InlineHighlight from "../components/inline-highlight";
import Layout from "../components/layout";
import Prose from "../components/prose";
import { getBlogPosts } from "../lib/blog";

export async function getStaticProps() {
  const blogPosts = await getBlogPosts({ limit: 5 });

  return { props: { blogPosts } };
}

export default function Home({ blogPosts }) {
  const blogPostItems = blogPosts.map((blogPost) => (
    <li key={blogPost.slug} className="flex sm:flex-row flex-col justify-between">
      <a href={`/blog/${blogPost.slug}`}>
        <h5 className="text-brand-primary text-xl">{blogPost.title}</h5>
      </a>
      <aside className="text-sm">{blogPost.date}</aside>
    </li>
  ));

  return (
    <Layout alignCenter={true}>
      <Prose className="prose-lg prose-h1:text-5xl prose-h1:font-thin" id="who-am-i">
        <h1>Hello, I'm Jon 👋🏻</h1>
        <p>
          I'm a <InlineHighlight>software engineer</InlineHighlight>,{" "}
          <InlineHighlight>photographer</InlineHighlight>, and{" "}
          <InlineHighlight>general purpose nerd</InlineHighlight> based in London.
        </p>
      </Prose>
      <section id="blog" className="mt-32 sm:mt-16 invisible">
        <h2 className="mb-2">🧻 Recent Posts</h2>
        <ul>{blogPostItems}</ul>
      </section>
    </Layout>
  );
}
