import Layout from "../../components/layout";
import { getBlogPostBySlug, getBlogPosts } from "../../lib/blog";

export async function getStaticPaths() {
  const posts = await getBlogPosts({ limit: 100 });

  const slugs = posts.map(({ slug }) => ({ params: { slug } }));

  return { paths: slugs, fallback: false };
}

export async function getStaticProps(context) {
  const post = await getBlogPostBySlug(context.params.slug);

  return { props: post };
}

export default function BlogPost({ title, date, slug, content, keywords }) {
  return (
    <Layout>
      <article>
        <h1>{title}</h1>
        <aside>{date}</aside>
        <hr />
        <pre>{content}</pre>
      </article>
    </Layout>
  );
}
