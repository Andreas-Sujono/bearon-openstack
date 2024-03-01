import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  CustomBottomTag,
  CustomTopTag,
  ItemCard1 as ItemCard1Comp,
} from './ItemCard';
import { Row } from '../../Layout';

const meta: Meta<typeof ItemCard1Comp> = {
  title: 'Card/ItemCard',
  component: ItemCard1Comp,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const ItemCard1: Story = {
  render: () => {
    return (
      <Row wrap gap="1rem">
        <ItemCard1Comp
          name="Flex Printed Crew Sock - Cart Path Grey – 2UNDR"
          img="https://2undr.com/cdn/shop/products/2U81PS.320_1400x.png?v=1677564547"
          price="$50.00"
          sold={10}
        />

        <ItemCard1Comp
          name="Flex Printed Crew Sock - Cart Path Grey – 2UNDR"
          img="https://2undr.com/cdn/shop/products/2U81PS.320_1400x.png?v=1677564547"
          price="$49.00"
          priceDiscount="$39.99"
          discountTagNumber={10}
          sold={20}
        />

        <ItemCard1Comp
          name="Flex Printed Crew Sock - Cart Path Grey – 2UNDR"
          img="https://2undr.com/cdn/shop/products/2U81PS.320_1400x.png?v=1677564547"
          price="$49.00"
          priceDiscount="$39.99"
          sold={20}
          customTopTags={
            <>
              <CustomTopTag label="Lowest Price" idx={0} />
              <CustomTopTag label="Best Buy" idx={1} />
            </>
          }
        />

        <ItemCard1Comp
          name="Flex Printed Crew Sock - Cart Path Grey – 2UNDR"
          img="https://2undr.com/cdn/shop/products/2U81PS.320_1400x.png?v=1677564547"
          price="$49.00"
          priceDiscount="$39.99"
          discountTagNumber={10}
          sold={20}
          customTopTags={
            <>
              <CustomTopTag label="Lowest Price" idx={1} />
              <CustomTopTag label="Best Buy" idx={2} />
            </>
          }
          customBottomTags={
            <Row gap="4px">
              <CustomBottomTag label="Free shipping" color="primary" />
              <CustomBottomTag label="10% cashback" color="primary" />
            </Row>
          }
        />
      </Row>
    );
  },
};
