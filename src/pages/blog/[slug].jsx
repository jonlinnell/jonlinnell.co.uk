import Layout from "../../components/layout";
import Heading from "../../components/heading";
import { getBlogPostBySlug, getBlogPosts } from "../../lib/blog";
// import { MDXProvider } from "@mdx-js/react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Paragraph = ({ children }) => <p className="my-5">{children}</p>;

const components = {
  p: Paragraph,

  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, "")}
        style={atomDark}
        language={match[1]}
        PreTag="div"
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export async function getStaticPaths() {
  const posts = await getBlogPosts({ limit: 100 });

  const slugs = posts.map(({ slug }) => ({ params: { slug } }));

  return { paths: slugs, fallback: false };
}

export async function getStaticProps(context) {
  const post = await getBlogPostBySlug(context.params.slug);

  return { props: post };
}

function Date({ children }) {
  return <span className="italic text-gray-700 dark:text-gray-200">{children}</span>;
}

export default function BlogPost({ title, date, slug, content, keywords }) {
  return (
    <Layout>
      <article className="mx-auto w-10/12 md:w-8/12 lg:w-5/12 break-normal">
        <Heading variant="h1" className="text-center py-8 sm:py-5 lg:text-5xl">
          {title}
        </Heading>
        <Date>{date}</Date>
        <ReactMarkdown components={components}>{content}</ReactMarkdown>
      </article>
    </Layout>
  );
}
