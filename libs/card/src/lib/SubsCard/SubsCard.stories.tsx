import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SubsCard1 as SubsCard1Comp } from './SubsCard1';
import { Row } from '../../Layout';

const meta: Meta<typeof SubsCard1Comp> = {
  title: 'Card/SubsCard',
  component: SubsCard1Comp,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const StatsCard1: Story = {
  render: () => {
    return (
      <Row gap="1rem" wrap sx={{ height: '320px' }}>
        <SubsCard1Comp
          planName="Free Trial"
          priceLabel="FREE"
          ctaText="Start Trial"
          benefits={[
            {
              label: 'Up to 2 users',
            },
            {
              label: 'No Support',
            },
            {
              label: 'Limited access',
            },
          ]}
        />
        <SubsCard1Comp
          planName="Personal"
          priceLabel="$9.99/mo"
          ctaText="Get Started"
          benefits={[
            {
              label: 'Up to 10 users',
            },
            {
              label: 'Email Support',
            },
            {
              label: 'Unlimited access',
            },
            {
              label: 'Export projects',
            },
          ]}
          topTagLabel="Best Value"
        />
        <SubsCard1Comp
          planName="Team"
          priceLabel="$29.99/mo"
          ctaText="Get Started"
          benefits={[
            {
              label: 'Unlimited users',
            },
            {
              label: 'Full Support',
            },
            {
              label: 'Unlimited access',
            },
            {
              label: 'Export projects',
            },
          ]}
          withPopularTag
        />
      </Row>
    );
  },
};
