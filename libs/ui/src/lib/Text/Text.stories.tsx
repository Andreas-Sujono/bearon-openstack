import type { Meta } from '@storybook/react';
import Text from '.';

const meta: Meta<typeof Text> = {
  title: 'Foundation/Typography',
  component: Text,
  tags: ['autodocs'],
};
export default meta;

export const Sizes = {
  render: () => {
    return (
      <div>
        <Text size="xs">Typography xs</Text> <br />
        <Text size="s">Typography s</Text>
        <br />
        <Text size="m">Typography m</Text>
        <br />
        <Text size="l">Typography l</Text>
        <br />
        <Text size="xl">Typography xl</Text>
        <br />
        <Text size="h5">Typography h5</Text>
        <br />
        <Text size="h4">Typography h4</Text>
        <br />
        <Text size="h3">Typography h3</Text>
        <br />
        <Text size="h2">Typography h2</Text>
        <br />
        <Text size="h1">Typography h1</Text>
        <br />
      </div>
    );
  },
};
