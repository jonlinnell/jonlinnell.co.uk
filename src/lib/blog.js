import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { format } from "date-fns";

const BLOG_PATH = path.resolve(process.cwd(), "content", "blog");

const NEWEST = "NEWEST";

const comparators = {
  [NEWEST]: (a, b) => (a.date < b.date ? 1 : -1),
};

function formatBlogPost(postData) {
  const { content, data } = matter(postData);

  const post = {
    ...data,
    date: new Date(data.date).getTime(),
    keywords: data.keywords.split(","),
    content,
  };

  return post;
}

async function readBlogPost(identifier) {
  // `identifier` can be a slug or a filename

  const allPosts = await fs.readdir(BLOG_PATH);

  const includeExtension = !/\.md$/.test(identifier);

  const file = allPosts.find((post) =>
    new RegExp(`${identifier}${includeExtension ? ".md" : ""}$`).test(post)
  );

  return fs.readFile(path.join(BLOG_PATH, file));
}

export async function getBlogPosts({ sort = NEWEST, limit = 2, fields } = {}) {
  const postFiles = (await fs.readdir(BLOG_PATH)).filter((file) => /\.md$/.test(file));

  let posts = [];

  for (const postFile of postFiles) {
    const data = await readBlogPost(postFile);

    const post = {
      ...formatBlogPost(data),
      slug: postFile.slice(11, -3),
    };

    posts.push(post);
  }

  return posts.sort(comparators[sort]).slice(0, limit);
}

export async function getBlogPostBySource(file) {
  const data = await readBlogPost(file);

  const postData = formatBlogPost(data);

  return postData;
}
