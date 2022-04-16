import { AboutMeLink } from '@components/AboutMeLink'
import { Box } from '@components/Box'
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
      <Box py={{ mobile: 5, tablet: 10 }} my={{ desktop: 20 }}>
        <Box mb={{ mobile: 4, tablet: 8 }}>
          <Text as="h2" size="6xl">
            <strong>Hi there!</strong>{' '}
            <Text as="span" size="6xl" color="gray60">
              I’m passionate about developing web applications and meticulously
              crafting user interfaces.
            </Text>
          </Text>
        </Box>
        <AboutMeLink />
      </Box>
      <Box py={{ mobile: 5, tablet: 10 }}>
        <PostList posts={featured} title="Featured" />
      </Box>
      <Box py={{ mobile: 5, tablet: 10 }}>
        <PostList posts={posts} title="All Posts" />
      </Box>
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
