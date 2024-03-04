import React from 'react';
import Column from '../Layout/Column';
import { ThemeColor } from '../ThemeProvider';
import { TextVariant } from '../Text';
import { MinimalPagination, Pagination } from './Pagination';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
};
export default meta;

const DefaultComponent = ({
  totalCount = 100,
  activeBackground,
  size,
}: {
  totalCount?: number;
  activeBackground?: ThemeColor;
  size?: TextVariant;
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const setPage = (page: number) => setCurrentPage(page);

  return (
    <Pagination
      totalCount={totalCount}
      currentPage={currentPage}
      setPage={setPage}
      size={size}
      activeBackground={activeBackground}
    />
  );
};

const DefaultMinimalComponent = ({
  totalCount = 100,
  size,
}: {
  totalCount?: number;
  size?: TextVariant;
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const setPage = (page: number) => setCurrentPage(page);

  return (
    <MinimalPagination
      totalCount={totalCount}
      currentPage={currentPage}
      setPage={setPage}
      size={size}
    />
  );
};

export const DefaultPagination = {
  render: () => {
    return (
      <Column gap="1rem">
        <DefaultComponent totalCount={10} />
        <DefaultComponent totalCount={20} />
        <DefaultComponent totalCount={30} />
        <DefaultComponent totalCount={40} />
        <DefaultComponent totalCount={50} />
        <DefaultComponent totalCount={60} />
        <DefaultComponent totalCount={70} />
        <DefaultComponent totalCount={80} />
        <DefaultComponent totalCount={90} />
        <DefaultComponent />
        <DefaultComponent totalCount={1000} />
      </Column>
    );
  },
};

export const Colours = {
  render: () => {
    return (
      <Column gap="1rem">
        <DefaultComponent activeBackground="primary" />
        <DefaultComponent activeBackground="success" />
        <DefaultComponent activeBackground="warning" />
        <DefaultComponent activeBackground="error" />
      </Column>
    );
  },
};

export const Sizes = {
  render: () => {
    return (
      <Column gap="1rem">
        <DefaultComponent activeBackground="primary" size="xs" />
        <DefaultComponent activeBackground="primary" size="sm" />
        <DefaultComponent activeBackground="primary" size="md" />
        <DefaultComponent activeBackground="primary" size="lg" />
        <DefaultComponent activeBackground="primary" size="xl" />
      </Column>
    );
  },
};

export const MinimalVariant = {
  render: () => {
    return (
      <Column gap="1rem">
        <DefaultMinimalComponent />
      </Column>
    );
  },
};
