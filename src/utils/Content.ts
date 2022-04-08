import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export type PostItems = {
  [key: string]: string;
};

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const items: PostItems = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (field === 'date') {
      items[field] = data.date.toString();
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  if (items.date) {
    items.date = items.date.toString();
  }

  return items;
}

export function getAllPosts(fields: string[] = []) {
  return (
    getPostSlugs()
      .map((slug) => getPostBySlug(slug, fields))
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  );
}
