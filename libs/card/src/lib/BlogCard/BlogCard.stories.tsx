import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BlogAuthor, BlogCard1 as BlogCard } from './BlogCard1';
import { BlogCard1Skeleton } from './Skeleton/BlogCard1Skeleton';
import { BlogCard2 as BlogCard2Comp } from './BlogCard2';
import { BlogCard3 as BlogCard3Comp } from './BlogCard3';
import { BlogCard4 as BlogCard4Comp } from './BlogCard4';
import { Column, Row } from '../../Layout';

const meta: Meta<typeof BlogCard> = {
  title: 'Card/BlogCard',
  component: BlogCard,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const BlogCard1: Story = {
  render: () => {
    return (
      <Row wrap gap="1rem">
        <BlogCard1Skeleton />
        <BlogCard
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          img="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          pubDate={'24 Feb 2024'}
          author={'John Doe'}
          titleMaxLine={2}
          descMaxLine={4}
          sx={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          }}
        />
      </Row>
    );
  },
};

export const BlogCard2: Story = {
  render: () => {
    return (
      <BlogCard2Comp
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        img="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        pubDate={'24 Feb 2024'}
        author={'John Doe'}
        sx={{
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
      />
    );
  },
};

export const BlogCard3: Story = {
  render: () => {
    return (
      <Column gap="2rem">
        <BlogCard3Comp
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          img="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          pubDate={'24 Feb 2024'}
          author={'John Doe'}
          readTime="5 min read"
          tags={[
            {
              label: 'Lorem Ipsum',
              color: 'grey',
            },
          ]}
          sx={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          }}
        />
        <BlogCard3Comp
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          img="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          pubDate={'24 Feb 2024'}
          author={'John Doe'}
          authorEl={
            <BlogAuthor
              author="John Doe"
              authorImg="https://file.xunruicms.com/admin_html/assets/pages/media/profile/profile_user.jpg"
              publication="New Media"
            />
          }
          readTime="5 min read"
          tags={[
            {
              label: 'Lorem Ipsum',
              color: 'grey',
            },
          ]}
          sx={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          }}
        />
      </Column>
    );
  },
};

export const BlogCard4: Story = {
  render: () => {
    return (
      <Column gap="2rem">
        <BlogCard4Comp
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          img="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          pubDate={'24 Feb 2024'}
          category="Frontend"
          sx={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          }}
        />
        <BlogCard4Comp
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          img="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          pubDate={'24 Feb 2024'}
          category="Backend"
          tags={[
            {
              label: 'Lorem Ipsum',
              color: 'grey',
            },
            {
              label: 'Lorem Ipsum2',
              color: 'grey',
            },
          ]}
          sx={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          }}
        />
      </Column>
    );
  },
};
