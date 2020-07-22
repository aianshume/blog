const path = require('path')
const prism = require('prismjs')
const marked = require('marked')
const matter = require('gray-matter')
const formatDate = require('date-fns/format')
const readingTime = require('reading-time')
const slugify = require('slugify')

// Support JSX syntax highlighting
require('prismjs/components/prism-jsx.min')

const EXCERPT_SEPARATOR = '<!--more-->'
const renderer = new marked.Renderer()
const linkRenderer = renderer.link

renderer.link = (href, title, text) => {
  const html = linkRenderer.call(renderer, href, title, text)

  if (href.indexOf('/') === 0) {
    // Do not open internal links on new tab
    return html
  } else if (href.indexOf('#') === 0) {
    // Handle hash links to internal elements
    const html = linkRenderer.call(renderer, 'javascript:;', title, text)
    return html.replace(
      /^<a /,
      `<a onclick="document.location.hash='${href.substr(1)}';" `
    )
  }

  return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ')
}

renderer.heading = (text, level) => {
  const id = slugify(text, {
    lower: true,
  })
  return `<h${level} id="${id}">${text}</h${level}>`
}

renderer.code = (code, language) => {
  const parser = prism.languages[language] || prism.languages.html
  const highlighted = prism.highlight(code, parser, language)
  return `<pre class="language-${language}"><code class="language-${language}">${highlighted}</code></pre>`
}

marked.setOptions({ renderer })

export default () => ({
  transform(md, id) {
    if (!/\.md$/.test(id)) return null

    const fileName = path.basename(id)
    const { data, content: rawContent } = matter(md)
    const { title, date, tags = [], ...rest } = data
    const slug = fileName.split('.')[0]
    let content = rawContent
    let excerpt = ''

    if (rawContent.indexOf(EXCERPT_SEPARATOR) !== -1) {
      const splittedContent = rawContent.split(EXCERPT_SEPARATOR)
      excerpt = marked(splittedContent[0])
    }

    let tokens = [{
      type: 'html',
      raw: `<div class="section" data-id="">`,
      text: `<div class="section" data-id="">`,
    }]
    let open = false

    // Wrap all headings and content up to the next heading in a div
    marked.lexer(rawContent).forEach((token) => {
      if (token.type === 'heading') {
        const id = slugify(token.text, {
          lower: true,
        })
        if (open) {
          tokens.push({
            type: 'html',
            raw: '</div>',
            text: '</div>',
          })
        }
        tokens.push({
          type: 'html',
          raw: `<div class="section" data-id="${id}">`,
          text: `<div class="section" data-id="${id}">`,
        })
        open = true
      }
      tokens.push(token)
    })

    if (open) {
      tokens.push({
        type: 'html',
        raw: '</div>',
        text: '</div>',
      })
    }
    console.log(tokens)

    const tableOfContents = marked
      .lexer(rawContent)
      .filter(({ type }) => type === 'heading')
      .map(({ depth, text }) => ({
        depth,
        text,
        slug: slugify(text, {
          lower: true,
        }),
      }))

    const modifiedTags = tags.map((tag) => ({
      name: tag,
      slug: slugify(tag, {
        lower: true,
      }),
    }))
    const html = marked.parser(tokens)
    const readingStats = readingTime(content)
    const printReadingTime = readingStats.text
    const printDate = formatDate(new Date(date), 'MMMM D, YYYY')

    const exportFromModule = JSON.stringify({
      title: title || slug,
      slug,
      html,
      date,
      tags: modifiedTags,
      excerpt,
      printDate,
      printReadingTime,
      tableOfContents,
      ...rest,
    })

    return {
      code: `export default ${exportFromModule}`,
      map: { mappings: '' },
    }
  },
})
