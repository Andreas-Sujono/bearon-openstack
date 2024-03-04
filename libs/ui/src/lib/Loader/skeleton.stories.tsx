import React from 'react';
import { Column, Row } from '../Layout';
import {Skeleton} from './Skeleton';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs', 'Skeleton'],
  argTypes: {},
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  render: () => (
    <Row gap="1rem">
      <Skeleton w="40px" h="40px" circular />
      <Column style={{ width: '100%' }} gap="0.5rem">
        <Skeleton w="100%" h="20px" />
        <Skeleton w="100%" h="20px" mt="0.5rem" />
        <Skeleton w="100%" h="20px" mt="0.5rem" />
      </Column>
    </Row>
  ),
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: 'shown' }, // start with the source open
      // source: { type: 'code' }, // forces the raw source code (rather than the rendered JSX).
    },
  },
};
