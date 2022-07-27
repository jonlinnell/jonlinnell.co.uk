import Heading from "../components/heading";
import InlineHighlight from "../components/inline-highlight";
import Layout from "../components/layout";
import { getBlogPosts } from "../lib/blog";

export async function getStaticProps() {
  const blogPosts = await getBlogPosts({ limit: 5 });

  return { props: { blogPosts } };
}

export default function Home({ blogPosts }) {
  const blogPostItems = blogPosts.map((blogPost) => (
    <li>
      <Heading variant="h5">{blogPost.title}</Heading>
      <aside>{blogPost.date}</aside>
    </li>
  ));

  return (
    <Layout alignCenter={true}>
      <main className="flex-shrink">
        <div id="who-am-i">
          <Heading variant="h1">Hello, I'm Jon 👋🏻</Heading>
          <p>
            I'm a <InlineHighlight>software engineer</InlineHighlight>,{" "}
            <InlineHighlight>photographer</InlineHighlight>, and{" "}
            <InlineHighlight>general purpose nerd</InlineHighlight> based in London.
          </p>
        </div>
        {/* <div id="blog">
          <ul>{blogPostItems}</ul>
        </div> */}
      </main>
    </Layout>
  );
}
