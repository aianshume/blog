import { Container } from '@components/Container'
import { Layout } from '@components/Layout'
import { Meta } from '@components/Meta'
import { Text } from '@components/Text/Text'
import { getAllPosts, getPostBySlug } from '@utils/Content'
import { markdownToHtml } from '@utils/Markdown'
import { format } from 'date-fns'
import type { GetStaticPaths, GetStaticProps } from 'next'

type PostUrl = {
  slug: string
}

type PostProps = {
  title: string
  description: string
  date: string
  content: string
}

const Post = (props: PostProps) => (
  <Layout
    meta={
      <Meta
        title={props.title}
        description={props.description}
        post={{
          date: props.date,
        }}
      />
    }
  >
    <Container>
      <Text as="h1" size="4xl" weight="bold">
        {props.title}
      </Text>
      <Text as="time" color="gray" size="sm" dateTime={props.date}>
        {format(new Date(props.date), 'LLLL d, yyyy')}
      </Text>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </Container>
  </Layout>
)

export const getStaticPaths: GetStaticPaths<PostUrl> = async () => {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PostProps, PostUrl> = async ({
  params,
}) => {
  const post = getPostBySlug(params!.slug, [
    'title',
    'description',
    'date',
    'content',
    'slug',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      title: post.title,
      description: post.description,
      date: post.date,
      content,
    },
  }
}

export default Post
