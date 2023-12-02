import React from 'react';
import { CloseIcon, TrashIcon, AddIcon } from '@bearon/icon';
import Row from '../Layout/Row';
import Button from './Button';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs', 'button'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Variant: Story = {
  render: () => (
    <Row gap="1rem">
      <Button>Contained</Button>
      <Button clip>Contained Clip</Button>

      <Button variant="outlined">outlined</Button>
      <Button variant="outlined-secondary">outlined secondary</Button>

      <Button variant="text">text</Button>
      <Button disabled>disabled</Button>
    </Row>
  ),
  args: {},
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
};

export const Color: Story = {
  render: () => (
    <Row gap="1rem">
      <Button background="primary">Primary</Button>
      <Button background="secondary">secondary</Button>
      <Button background="accent">accent</Button>

      <Button background="black">black</Button>
      <Button background="error">error</Button>
      <Button background="info">info</Button>
      <Button background="warning">warning</Button>
    </Row>
  ),
  args: {},
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
};

export const Size: Story = {
  render: () => (
    <Row gap="1rem" wrap>
      <Button textVariant="xs">xs button</Button>
      <Button textVariant="sm">sm button</Button>
      <Button textVariant="md">md button</Button>
      <Button textVariant="lg">lg button</Button>
      <Button textVariant="h5">h5 button</Button>
      <Button textVariant="h4">h4 button</Button>
    </Row>
  ),
  args: {},
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
};

export const Loading: Story = {
  render: () => (
    <Row gap="1rem">
      <Button
        isLoading
        loaderProps={{
          color: 'white',
          size: '16px',
        }}
      >
        base loader
      </Button>
      <Button
        isLoading
        disabled
        background="textLight"
        loaderProps={{
          color: 'white',
        }}
      >
        loader + disabled + grey bg
      </Button>
    </Row>
  ),
  args: {},
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
};

export const WithIcon: Story = {
  render: () => (
    <Row gap="1rem">
      <Button icon={<CloseIcon />}>Close</Button>
      <Button icon={<CloseIcon />} iconPosition="right">
        Close
      </Button>

      <Button
        icon={<TrashIcon />}
        sx={{ borderRadius: '50%', padding: '0.75em' }}
      ></Button>
      <Button
        icon={<AddIcon style={{ color: 'red' }} />}
        sx={{ borderRadius: '50%', padding: '0.75em' }}
        variant="text"
      ></Button>
    </Row>
  ),
  args: {},
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
};
