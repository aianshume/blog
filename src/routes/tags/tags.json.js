import posts from '..//_posts.js'

const tags = Object.values(
  posts
    .map(({ tags }) => tags)
    .reduce((accumulator, tags) => {
      tags.forEach((tag) => {
        const result = accumulator[tag.slug] || { count: 0 }
        accumulator[tag.slug] = {
          count: result.count + 1,
          ...tag,
        }
      })
      return accumulator
    }, {})
)

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  })
  res.end(JSON.stringify(tags))
}
