import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Form/TextInput',
  component: TextInput,
  tags: ['autodocs', 'Loader'],
  argTypes: {},
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: () => {
    return <TextInput label="Email" />;
  },
  args: {},
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: 'shown' }, // start with the source open
      // source: { type: 'code' }, // forces the raw source code (rather than the rendered JSX).
    },
  },
};
