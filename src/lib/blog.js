import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_PATH = path.resolve(process.cwd(), 'content', 'blog');

const NEWEST = 'NEWEST';

const sortBy = {
  [NEWEST]: (a, b) => (a.date < b.date ? 1 : -1),
};

function formatBlogPost(postData) {
  const { content, data } = matter(postData);

  const post = {
    ...data,
    date: data.date.valueOf(),
    keywords: data.keywords.split(','),
    content,
  };

  return post;
}

function readBlogPost(file) {
  return fs.readFile(path.join(BLOG_PATH, file));
}

export async function getBlogPosts({ sort = NEWEST, limit = 2, fields } = {}) {
  const postFiles = (await fs.readdir(BLOG_PATH)).filter((file) => /\.md$/.test(file));

  let posts = [];

  for (const i in postFiles) {
    const postFile = postFiles[i];

    const data = await readBlogPost(postFile);

    const post = {
      ...formatBlogPost(data),
      slug: postFile.slice(0, -3),
    };

    posts.push(post);
  }

  return posts.sort(sortBy[sort]).slice(0, limit);
}

export async function getBlogPostBySlug(slug) {
  const data = await readBlogPost(`${slug}.md`);

  const postData = formatBlogPost(data);

  console.log(postData);

  return postData;
}
