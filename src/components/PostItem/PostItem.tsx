import { Text } from '@components/Text'
import { format } from 'date-fns'
import Link from 'next/link'
import { listItem, postDate, postLink, postTitle } from './PostItem.css'

export interface PostItemProps {
  title: string
  date: string
  slug: string
}

export const PostItem = ({ title, date, slug }: PostItemProps) => {
  return (
    <li className={listItem}>
      <Link href={slug}>
        <a className={postLink}>
          <Text as="span" size="lg" className={postTitle} weight="semibold">
            {title}
          </Text>
          <Text
            as="time"
            className={postDate}
            dateTime={date}
            color="gray60"
            size="sm"
          >
            {format(new Date(date), 'LLL yyyy')}
          </Text>
        </a>
      </Link>
    </li>
  )
}
