import type { Meta } from '@storybook/react';
import { Heading } from '.';

const meta: Meta<typeof Heading> = {
  title: 'Foundation/Heading',
  component: Heading,
  tags: ['autodocs'],
};
export default meta;

export const Sizes = {
  render: () => {
    return (
      <div>
        <Heading level="1">Heading h1</Heading>
        <Heading level="2">Heading h2</Heading>
        <Heading level="3">Heading h3</Heading>
        <Heading level="4">Heading h4</Heading>
        <Heading level="5">Heading h5</Heading>
        <br />
      </div>
    );
  },
};
