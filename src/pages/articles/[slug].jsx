import Head from "next/head";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark as codeThemeDark,
  coy as codeThemeLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { format } from "date-fns";

import Heading from "../../components/heading";
import InlineHighlight from "../../components/inline-highlight.jsx";
import Keywords from "../../components/keywords";
import Layout from "../../components/layout";
import Prose from "../../components/prose";
import { Paragraph } from "../../components/paragraph";
import { getArticleBySource, getArticles } from "../../lib/articles";
import { useThemeContext, DARK } from "../../context/theme";

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

  pre: ({ children }) => <pre className={classNames(["bg-transparent"])}>{children}</pre>,

  code({ node, inline, className, children, ...props }) {
    const { theme } = useThemeContext();
    const match = /language-(\w+)/.exec(className || "");

    return !inline && match ? (
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, "")}
        codeTagProps={{ className: classNames([]) }}
        style={theme === DARK ? codeThemeDark : codeThemeLight}
        customStyle={{ padding: "1px, 0" }} // No idea why this fixes padding...
        language={match[1]}
        lineProps={{ style: { wordBreak: "break-all", whiteSpace: "pre-wrap" } }}
        PreTag={({ className, ...preProps }) => (
          <pre
            className={classNames(className, [
              "border",
              "dark:border-gray-600/75",
              "border-gray-400/50",
              "text-base",
            ])}
            {...preProps}
          />
        )}
        wrapLines={true}
        showLineNumbers
      />
    ) : (
      <code className={classNames([className, "break-words"])}>{children}</code>
    );
  },
};

export async function getStaticPaths() {
  const posts = await getArticles({ limit: 100 });

  const slugs = posts.map(({ slug }) => ({ params: { slug } }));

  return { paths: slugs, fallback: false };
}

export async function getStaticProps(context) {
  const post = await getArticleBySource(context.params.slug);

  return { props: post };
}

function Date({ date }) {
  return (
    <div className="italic text-gray-700 dark:text-gray-200">
      {new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date)}
    </div>
  );
}

export default function Article({ title, date, content, keywords }) {
  return (
    <Layout title={title} classNames={["w-screen", "sm:w-11/12", "md:w-8/12", "xl:w-5/12"]}>
      <Head>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={`${content.slice(0, 150)}... | Jon Linnell`} />
        <meta property="article:published_time" content={format(date, "dd MM yyyy")} />
        <meta property="og:type" content="article" />
      </Head>

      <Prose className="max-w-none">
        <Heading variant="h1" className={["lg:text-5xl"]}>
          {title}
        </Heading>
        <div className={classNames(["flex"])}>
          <Date>{date}</Date>
          <div className={classNames(["ml-auto", "text-right"])}>
            <Keywords>{keywords}</Keywords>
          </div>
        </div>
        <ReactMarkdown components={components}>{content}</ReactMarkdown>
        <Paragraph>
          <a href="/articles">👈 Back to articles</a>
        </Paragraph>
      </Prose>

      <Prose
        className={classNames([
          "mt-16",
          "sm:mt-8",
          "max-w-none",
          "border-t-2",
          "border-brand-contrast",
        ])}
      >
        <Paragraph>
          This article was written by <InlineHighlight contrast>Jon Linnell</InlineHighlight>, a
          software engineer based in London, England.
        </Paragraph>
      </Prose>
    </Layout>
  );
}
