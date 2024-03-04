import { useState } from 'react';
import { Box, Column } from '../Layout';
import { Tabs, TabsProps } from './Tabs';
import { TabsHover as TabsHoverComponent } from './TabsHover';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};
export default meta;

const items = [
  {
    label: 'Item 1',
    value: 1,
  },
  {
    label: 'Item 2',
    value: 2,
  },
  {
    label: 'Item 3',
    value: 3,
  },
];

const TabsComponent = (props: Partial<TabsProps>) => {
  const [value, setValue] = useState('1');

  return (
    <Tabs
      items={items}
      value={value}
      onClick={(val) => setValue(val as string)}
      {...props}
    />
  );
};

export const defaultTab = {
  render: () => {
    return (
      <Box>
        <TabsComponent />
      </Box>
    );
  },
};

export const Colours = {
  render: () => {
    return (
      <Column gap="2rem">
        <TabsComponent background="grey" />
        <TabsComponent background="success" />
        <TabsComponent background="warning" />
        <TabsComponent background="info" />
      </Column>
    );
  },
};

export const Underline = {
  render: () => {
    return <TabsComponent variant="underline" />;
  },
};

export const TabsHover = {
  render: () => {
    return (
      <Column gap="2rem">
        <TabsHoverComponent items={items} value={1} />
      </Column>
    );
  },
};
