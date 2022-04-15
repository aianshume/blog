import { Container } from '@components/Container'
import { Layout } from '@components/Layout'
import { Meta } from '@components/Meta'
import type { PostItemProps } from '@components/PostItem'
import { PostList } from '@components/PostList'
import { Text } from '@components/Text'
import { AppConfig } from '@utils/AppConfig'
import { getAllPosts, getFeaturedPosts } from '@utils/Content'
import type { GetStaticProps } from 'next'

interface IndexProps {
  posts: PostItemProps[]
  featured: PostItemProps[]
}

const Index = ({ posts, featured }: IndexProps) => (
  <Layout
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
    <Container>
      <Text as="h2" size="4xl">
        <strong>Hi there!</strong> I’m passionate about developing web
        applications and meticulously crafting user interfaces.
      </Text>
      <Text as="h2" size="3xl" weight="bold">
        Featured
      </Text>
      <PostList posts={featured} />
      <Text as="h2" size="3xl" weight="bold">
        All Posts
      </Text>
      <PostList posts={posts} />
    </Container>
  </Layout>
)

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const posts = getAllPosts(['title', 'date', 'slug'])
  const featured = getFeaturedPosts(['title', 'date', 'slug', 'featured'])
  return {
    props: {
      posts,
      featured,
    },
  }
}

export default Index
