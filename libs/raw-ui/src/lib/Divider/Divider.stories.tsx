import { Divider } from './Divider';
import { NotchDivider as NotchDividerComponent } from './NotchDivider';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
};
export default meta;

export const DefaultDivider = {
  render: () => {
    return <Divider />;
  },
};

export const NotchDivider = {
  render: () => {
    return <NotchDividerComponent />;
  },
};

export const LineWidthAndHeight = {
  render: () => {
    return <Divider lineWidth="50%" lineHeight="2px" background="primary" />;
  },
};

export const NotchDividerColor = {
  render: () => {
    return <NotchDividerComponent background="black" backgroundOpacity={0.5} />;
  },
};
