import React from 'react';

import { GetStaticProps } from 'next';

import { BlogGallery, IBlogGalleryProps } from '../blog/BlogGallery';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';
import { getAllPosts } from '../utils/Content';

const Index = (props: IBlogGalleryProps) => (
  <Main
    meta={
      <Meta
        title="Made with Next.js, TypeScript, ESLint, Prettier, PostCSS, Tailwind CSS"
        description={AppConfig.description}
      />
    }
  >
    <BlogGallery posts={props.posts} />
  </Main>
);

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts(['title', 'date', 'slug']);
  return {
    props: {
      posts,
    },
  };
};

export default Index;
