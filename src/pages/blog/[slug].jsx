import { getBlogPostBySlug, getBlogPosts } from "../../lib/blog";

export async function getStaticPaths() {
  const posts = await getBlogPosts({ limit: 100 });

  const slugs = posts.map(({ slug }) => ({ params: slug }));

  return { paths: slugs, fallback: true };
}

export async function getStaticProps(context) {
  const postData = await getBlogPostBySlug(context.params);

  return { props: { post } };
}

export default function BlogPost({ title, date, slug, content, keywords }) {
  return (
    <article>
      <h1>{title}</h1>
      <aside>{date}</aside>
      <hr />
      <pre>{content}</pre>
    </article>
  );
}