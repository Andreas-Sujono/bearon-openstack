import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs', 'Loader'],
  argTypes: {},
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  render: () => {
    return (
      <Image
        srcs={[
          'https://t4.ftcdn.net/jpg/05/56/81/55/360_F_556815523_AYrXaaLIUESVAphY1jQ02wGJ5M8qMtTs.jpg',
        ]}
        sx={{
          width: {
            sm: '100px',
            md: '200px',
            lg: '300px',
          },
          height: {
            sm: '100px',
            md: '200px',
            lg: '300px',
          },
          mt: '1rem',
        }}
        br="0.5rem"
      />
    );
  },
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: 'shown' }, // start with the source open
      // source: { type: 'code' }, // forces the raw source code (rather than the rendered JSX).
    },
  },
};
