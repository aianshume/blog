import pick from 'lodash.pick'
import all from './posts/*.md'

const props = ['title', 'slug', 'tags']

export default all
  .map((post) => ({ ...post, html: post.html.replace(/^\t{3}/gm, '') }))
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .map((post, index, array) => {
    const next = array[index + 1]
    const previous = array[index - 1]
    return {
      ...post,
      previous: (previous && pick(previous, props)) || null,
      next: (next && pick(next, props)) || null,
    }
  })
