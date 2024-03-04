import { Meta } from '@storybook/react';
import { Research as Component } from './Research';
import { ConsumerBehaviourResearch } from './ConsumerBehaviourResearch';
import { SourcesResearch } from './SourcesResearch';

export default {
  title: 'Introduction/Research',
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const UIFrameworkResearch = () => <Component />;

export const ConsumerBehaviour = () => <ConsumerBehaviourResearch />;

export const Sources = () => <SourcesResearch />;
