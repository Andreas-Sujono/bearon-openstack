import { Tooltip } from './Tooltip';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooptip',
  component: Tooltip,
  tags: ['autodocs'],
};
export default meta;

export const defaultTooltip = {
  render: () => {
    return <Tooltip text="Tooltip content">Hover me </Tooltip>;
  },
};
