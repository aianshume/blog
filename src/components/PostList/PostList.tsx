import { PostItem, PostItemProps } from '@components/PostItem'
import { Text } from '@components/Text'
import { list, listTitle } from './PostList.css'

export interface PostListProps {
  title?: string
  posts: PostItemProps[]
}

export const PostList = ({ posts, title }: PostListProps) => {
  const postList = posts.map((post) => <PostItem key={post.slug} {...post} />)
  return (
    <>
      {title && (
        <Text as="h2" size="3xl" weight="bold" className={listTitle}>
          {title}
        </Text>
      )}
      <ul className={list}>{postList}</ul>
    </>
  )
}
