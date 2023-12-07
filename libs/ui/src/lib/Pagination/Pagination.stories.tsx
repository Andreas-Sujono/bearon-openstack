import Pagination from './Pagination';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
};
export default meta;

export const DefaultPagination = {
  render: () => {
    return <Pagination totalCount={100} />;
  },
};
