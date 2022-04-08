import React from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <ul>
    {props.posts.map((elt) => (
      <li key={elt.slug} className="mb-3 flex justify-between">
        <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
          <a>
            <h2>{elt.title}</h2>
          </a>
        </Link>

        <div className="text-right">
          {format(new Date(elt.date), 'LLL d, yyyy')}
        </div>
      </li>
    ))}
  </ul>
);

export { BlogGallery };
