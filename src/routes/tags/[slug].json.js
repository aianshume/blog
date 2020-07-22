import posts from '../_posts.js'

const lookup = {}
const tags = {}

posts
  .map((post) => {
    return {
      tags: post.tags,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      printDate: post.printDate,
      printReadingTime: post.printReadingTime
    }
  })
  .forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => {
        const { slug } = tag
        lookup[slug] = (lookup[slug] || []).concat(post)
        tags[slug] = tag
      })
    }
  })

export function get(req, res) {
  const { slug } = req.params

  if (lookup[slug]) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    })
    const result = lookup[slug]
    res.end(JSON.stringify({
      tag: tags[slug],
      posts: result
    }))
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    })

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    )
  }
}
