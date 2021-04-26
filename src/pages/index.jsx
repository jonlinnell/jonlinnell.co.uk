import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
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
    <Layout>
      <main>
        <article id="who-am-i">
          <Heading variant="h1">Hello, I&apos;m Jon</Heading>
          <p>
            I&apos;m a <InlineHighlight>Product Engineer</InlineHighlight>,{" "}
            <InlineHighlight>photographer</InlineHighlight>, and{" "}
            <InlineHighlight>general purpose nerd</InlineHighlight> from the Midlands, based in
            London.
          </p>
        </article>
      </main>
    </Layout>
  );
}
