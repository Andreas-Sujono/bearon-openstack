import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StatsCard1 as StatsCard1Comp } from './StatsCard1';
import { Row } from '../../Layout';

const meta: Meta<typeof StatsCard1Comp> = {
  title: 'Card/StatsCard',
  component: StatsCard1Comp,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const StatsCard1: Story = {
  render: () => {
    return (
      <Row gap="1rem" wrap>
        <StatsCard1Comp
          label="Transaction Volume"
          iconImg="https://static.vecteezy.com/system/resources/previews/000/290/969/non_2x/transaction-vector-icon.jpg"
          number="$128,000,000"
        />
        <StatsCard1Comp
          label="Total Score"
          iconImg="https://t3.ftcdn.net/jpg/02/22/47/66/360_F_222476639_OrZ7FeCYVZYHVdStY64uIfoqStcTLzdZ.jpg"
          number="87"
          over="100"
        />
      </Row>
    );
  },
};
