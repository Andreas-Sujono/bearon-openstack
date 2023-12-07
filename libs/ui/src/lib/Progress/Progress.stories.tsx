import { Progress } from './Progress';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
};
export default meta;

export const DefaultProgress = {
  render: () => {
    return <Progress />;
  },
};
