import React from 'react';
import Pagination from './Pagination';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
};
export default meta;

const DefaultComponent = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const setPage = (page: number) => setCurrentPage(page);

  return (
    <Pagination
      totalCount={100}
      currentPage={currentPage}
      onClickPrev={setPage}
      onClickNext={setPage}
    />
  );
};
export const DefaultPagination = {
  render: () => {
    return <DefaultComponent />;
  },
};
