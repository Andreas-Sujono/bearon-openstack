import Loader from './Loader';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  tags: ['autodocs'],
};
export default meta;

export const Spinner = {
  render: () => {
    return <Loader type="spinner" />;
  },
};

export const Bars = {
  render: () => {
    return <Loader type="bars" />;
  },
};

export const Bubbles = {
  render: () => {
    return <Loader type="bubbles" color="blue" />;
  },
};

export const Spokes = {
  render: () => {
    return <Loader type="spokes" />;
  },
};

export const Cyclon = {
  render: () => {
    return <Loader type="cyclon" />;
  },
};
