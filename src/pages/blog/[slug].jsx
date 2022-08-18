import Layout from "../../components/layout";
import Keywords from "../../components/keywords";
import { format } from "date-fns";
import { getBlogPostBySource, getBlogPosts } from "../../lib/blog";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as codeSyntaxStyle } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Prose from "../../components/prose";
import InlineHighlight from "../../components/inline-highlight.jsx";
import classNames from "classnames";
import Image from "next/image";

const Paragraph = ({ children }) => <p className="my-5">{children}</p>;

const components = {
  p: (paragraph) => {
    const { node } = paragraph;

    if (node.children[0].tagName === "img") {
      const image = node.children[0];

      const altTextWithMetadata = image.properties.alt;

      const altText = altTextWithMetadata.match(/(^.+) \{{1}/)?.[1] || altTextWithMetadata;
      const width = parseInt(altTextWithMetadata.match(/\{(\d+)x/)?.[1] || "640", 10);
      const height = parseInt(altTextWithMetadata.match(/x(\d+)\}/)?.[1] || "480", 10);
      const caption = altTextWithMetadata.match(/\{caption: (.+)}/)?.[1];

      return <Image src={image.properties.src} height={height} width={width} alt={altText} />;
    }

    return <Paragraph>{paragraph.children}</Paragraph>;
  },

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
  return <div className="italic text-gray-700 dark:text-gray-200">{children}</div>;
}

export default function BlogPost({ title, date, slug, content, keywords }) {
  return (
    <Layout title={title} classNames={["w-screen", "sm:w-11/12", "md:max-w-prose"]}>
      <Prose className="max-w-none">
        <h1
          className={classNames([
            "text-brand-primary",
            "text-center",
            "py-2",
            "md:py-6",
            "lg:text-5xl",
            "font-thin",
          ])}
        >
          {title}
        </h1>
        <div className={classNames(["md:flex"])}>
          <Date>{format(date, "eeee do MMMM yyyy")}</Date>
          <div className={classNames(["md:ml-auto"])}>
            <Keywords>{keywords}</Keywords>
          </div>
        </div>
        <ReactMarkdown components={components}>{content}</ReactMarkdown>
      </Prose>

      <Prose className={classNames(["mt-16", "sm:mt-8", "border-t-2", "border-brand-contrast"])}>
        <Paragraph>
          This article was written by <InlineHighlight contrast>Jon Linnell</InlineHighlight>, a
          software engineer based in London, England.
        </Paragraph>
      </Prose>
    </Layout>
  );
}
