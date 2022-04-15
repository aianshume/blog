import { PostItem, PostItemProps } from '@components/PostItem'
import { list } from './PostList.css'

export interface PostListProps {
  posts: PostItemProps[]
}

export const PostList = ({ posts }: PostListProps) => {
  const postList = posts.map((post) => <PostItem key={post.slug} {...post} />)
  return <ul className={list}>{postList}</ul>
}
