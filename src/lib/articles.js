import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { format } from "date-fns";

const ARTICLES_PATH = path.resolve(process.cwd(), "content", "articles");

const NEWEST = "NEWEST";

const comparators = {
  [NEWEST]: (a, b) => (a.date < b.date ? 1 : -1),
};

function formatArticle(postData) {
  const { content, data } = matter(postData);

  const post = {
    ...data,
    date: new Date(data.date).getTime(),
    keywords: data.keywords.split(","),
    content,
  };

  return post;
}

async function readArticle(identifier) {
  // `identifier` can be a slug or a filename

  const allPosts = await fs.readdir(ARTICLES_PATH);

  const includeExtension = !/\.md$/.test(identifier);

  const file = allPosts.find((post) =>
    new RegExp(`${identifier}${includeExtension ? ".md" : ""}$`).test(post)
  );

  return fs.readFile(path.join(ARTICLES_PATH, file));
}

export async function getArticles({ sort = NEWEST, limit = 2, fields } = {}) {
  const postFiles = (await fs.readdir(ARTICLES_PATH)).filter((file) => /\.md$/.test(file));

  let posts = [];

  for (const postFile of postFiles) {
    const data = await readArticle(postFile);

    const post = {
      ...formatArticle(data),
      slug: postFile.slice(11, -3),
    };

    posts.push(post);
  }

  return posts.sort(comparators[sort]).slice(0, limit);
}

export async function getArticleBySource(file) {
  const data = await readArticle(file);

  const postData = formatArticle(data);

  return postData;
}
