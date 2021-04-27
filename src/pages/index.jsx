import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Heading from '../components/heading';
import InlineHighlight from '../components/inline-highlight';
import Layout from '../components/layout';
import { getBlogPosts } from '../lib/blog';

export async function getStaticProps() {
  const blogPosts = await getBlogPosts({ limit: 5 });

  return { props: { blogPosts } };
}

const mainArticleStyles = (theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  align-self: center;

  padding-bottom: 40vh;
`;

export default function Home({ blogPosts }) {
  const blogPostItems = blogPosts.map((blogPost) => (
    <li>
      <Heading variant="h5">{blogPost.title}</Heading>
      <aside>{blogPost.date}</aside>
    </li>
  ));

  return (
    <Layout>
      <div id="who-am-i" css={mainArticleStyles}>
        <div>
          <Heading variant="h1">Hello, I&apos;m Jon</Heading>
          <p>
            I&apos;m a <InlineHighlight>Product Engineer</InlineHighlight>,{' '}
            <InlineHighlight>photographer</InlineHighlight>, and{' '}
            <InlineHighlight>general purpose nerd</InlineHighlight> from the Midlands, based in
            London.
          </p>
        </div>
        .
      </div>
    </Layout>
  );
}
