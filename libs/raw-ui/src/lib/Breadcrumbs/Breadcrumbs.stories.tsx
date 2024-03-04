import { ChevronLeftIcon } from '@bearon/icon';
import Column from '../Layout/Column';
import { Breadcrumbs, BreadcrumbsItem } from './Breadcrumbs';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
};
export default meta;

export const defaultBreadcrumbs = {
  render: () => {
    return (
      <Breadcrumbs>
        <BreadcrumbsItem>Home</BreadcrumbsItem>
        <BreadcrumbsItem>News</BreadcrumbsItem>
        <BreadcrumbsItem>Top React Libraries</BreadcrumbsItem>
      </Breadcrumbs>
    );
  },
};

export const Sizes = {
  render: () => {
    return (
      <Column gap="1rem">
        <Breadcrumbs size="xs" gap="4px">
          <BreadcrumbsItem>Home</BreadcrumbsItem>
          <BreadcrumbsItem>News</BreadcrumbsItem>
          <BreadcrumbsItem>Top React Libraries</BreadcrumbsItem>
        </Breadcrumbs>
        <Breadcrumbs size="sm" gap="4px">
          <BreadcrumbsItem>Home</BreadcrumbsItem>
          <BreadcrumbsItem>News</BreadcrumbsItem>
          <BreadcrumbsItem>Top React Libraries</BreadcrumbsItem>
        </Breadcrumbs>
        <Breadcrumbs size="md">
          <BreadcrumbsItem>Home</BreadcrumbsItem>
          <BreadcrumbsItem>News</BreadcrumbsItem>
          <BreadcrumbsItem>Top React Libraries</BreadcrumbsItem>
        </Breadcrumbs>
        <Breadcrumbs size="lg">
          <BreadcrumbsItem>Home</BreadcrumbsItem>
          <BreadcrumbsItem>News</BreadcrumbsItem>
          <BreadcrumbsItem>Top React Libraries</BreadcrumbsItem>
        </Breadcrumbs>
      </Column>
    );
  },
};

export const CustomSeparator = {
  render: () => {
    return (
      <Column gap="1rem">
        <Breadcrumbs
          size="xs"
          gap="4px"
          separator={<ChevronLeftIcon size="16px" color="var(--grey)" />}
        >
          <BreadcrumbsItem>Home</BreadcrumbsItem>
          <BreadcrumbsItem>News</BreadcrumbsItem>
          <BreadcrumbsItem>Top React Libraries</BreadcrumbsItem>
        </Breadcrumbs>
        <Breadcrumbs
          size="sm"
          gap="4px"
          separator={<ChevronLeftIcon size="18px" color="var(--grey)" />}
        >
          <BreadcrumbsItem>Home</BreadcrumbsItem>
          <BreadcrumbsItem>News</BreadcrumbsItem>
          <BreadcrumbsItem>Top React Libraries</BreadcrumbsItem>
        </Breadcrumbs>
        <Breadcrumbs
          size="md"
          separator={<ChevronLeftIcon size="20px" color="var(--grey)" />}
        >
          <BreadcrumbsItem>Home</BreadcrumbsItem>
          <BreadcrumbsItem>News</BreadcrumbsItem>
          <BreadcrumbsItem>Top React Libraries</BreadcrumbsItem>
        </Breadcrumbs>
        <Breadcrumbs
          size="lg"
          separator={<ChevronLeftIcon size="24px" color="var(--grey)" />}
        >
          <BreadcrumbsItem>Home</BreadcrumbsItem>
          <BreadcrumbsItem>News</BreadcrumbsItem>
          <BreadcrumbsItem>Top React Libraries</BreadcrumbsItem>
        </Breadcrumbs>
      </Column>
    );
  },
};
