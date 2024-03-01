import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Loader, { ThinCircularLoader } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Loader',
  component: Loader,
  tags: ['autodocs', 'Loader'],
  argTypes: {},
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Circular: Story = {
  args: {
    color: '#ff0000',
    size: '36px',
  },
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: 'shown' }, // start with the source open
      // source: { type: 'code' }, // forces the raw source code (rather than the rendered JSX).
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ThinCircular: Story = {
  render: () => {
    return <ThinCircularLoader color="red" size="100px" />;
  },
  args: {
    color: '#ff0000',
    size: '100px',
  },
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: 'shown' }, // start with the source open
      // source: { type: 'code' }, // forces the raw source code (rather than the rendered JSX).
    },
  },
};
