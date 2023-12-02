import { Meta } from '@storybook/react';
import { Principles as Component } from './Principles';

export default {
  title: 'Introduction/Principles',
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Principles = () => <Component />;
