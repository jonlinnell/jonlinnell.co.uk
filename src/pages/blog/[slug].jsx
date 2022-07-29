import Layout from "../../components/layout";
import { getBlogPostBySource, getBlogPosts } from "../../lib/blog";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as codeSyntaxStyle } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Prose from "../../components/prose";
import classNames from "classnames";

const Paragraph = ({ children }) => <p className="my-5">{children}</p>;

const components = {
  p: Paragraph,

  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");

    return !inline && match ? (
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, "")}
        style={codeSyntaxStyle}
        language={match[1]}
        lineProps={{ style: { wordBreak: "break-all", whiteSpace: "pre-wrap" } }}
        wrapLines={true}
        showLineNumbers
        PreTag="div"
        {...props}
      />
    ) : (
      <code className={classNames(className, "break-words")} {...props}>
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
  const post = await getBlogPostBySource(context.params.slug);

  return { props: post };
}

function Date({ children }) {
  return <span className="italic text-gray-700 dark:text-gray-200">{children}</span>;
}

export default function BlogPost({ title, date, slug, content, keywords }) {
  return (
    <Layout title={title}>
      <Prose className="">
        <h1
          className={classNames([
            "text-brand-primary",
            "text-center",
            "py-6",
            "sm:py-2",
            "lg:text-5xl",
            "font-thin",
          ])}
        >
          {title}
        </h1>
        <Date>{date}</Date>
        <ReactMarkdown components={components}>{content}</ReactMarkdown>
      </Prose>
    </Layout>
  );
}
