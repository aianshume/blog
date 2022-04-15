import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const postsDirectory = join(process.cwd(), '_posts')

export type Post = {
  content: string
  date: string
  description: string
  featured?: boolean
  slug: string
  tags?: string[]
  title: string
}

type PostKeys = keyof Post

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: PostKeys[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const items: Partial<Post> = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (field === 'date') {
      items[field] = data.date.toString()
    }
    if (data[field]) {
      items[field] = data[field]
    }
  })

  if (items.date) {
    items.date = items.date.toString()
  }

  return items as Post
}

export function getAllPosts(fields: PostKeys[] = []) {
  return (
    getPostSlugs()
      .map((slug) => getPostBySlug(slug, fields))
      // sort posts by date in descending order
      .sort((post1, post2) =>
        new Date(post1.date) > new Date(post2.date) ? -1 : 1
      )
  )
}

export function getFeaturedPosts(fields: PostKeys[] = []) {
  return getAllPosts(fields).filter((post) => post.featured)
}
