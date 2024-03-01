import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FeatureCard1 as FeatureCard1Comp } from './FeatureCard1';

const meta: Meta<typeof FeatureCard1Comp> = {
  title: 'Card/FeatureCard',
  component: FeatureCard1Comp,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const FeatureCard1: Story = {
  render: () => {
    return (
      <FeatureCard1Comp
        title="Customer is the Priority"
        iconImg="https://static.vecteezy.com/system/resources/previews/000/443/307/original/hard-work-conceptual-illustration-design-vector.jpg"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        sx={{
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
      />
    );
  },
};

export const FeatureCard1LeftAlign: Story = {
  render: () => {
    return (
      <FeatureCard1Comp
        title="Customer is the Priority"
        iconImg="https://static.vecteezy.com/system/resources/previews/000/443/307/original/hard-work-conceptual-illustration-design-vector.jpg"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        sx={{
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
        iconSize="50px"
        leftAlign
      />
    );
  },
};
