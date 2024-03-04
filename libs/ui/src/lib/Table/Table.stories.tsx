import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useSort } from '@bearon/hooks';
import { Table, TableCell, TableRow } from './Table';
import { NoData as NoDataComponent } from './NoData';
import { Button, ButtonGroup } from '../Button';
import { AddIcon, TrashIcon } from '../Icon';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

const mockData = [
  {
    id: 1,
    name: 'John',
    email: 'john@gmail.com',
  },
  {
    id: 2,
    name: 'Andre',
    email: 'Andre@gmail.com',
  },
  {
    id: 3,
    name: 'Bernardd',
    email: 'bernard@gmail.com',
  },
];
export const Example: Story = {
  render: () => {
    return (
      <Table
        heads={['Id', 'Name', 'Email', 'Actions']}
        items={mockData}
        theadSx={{
          fontSize: '0.825rem',
          color: 'grey',
        }}
        renderItem={(item) => {
          return (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell align="right">
                <ButtonGroup align="right" spacing="1rem">
                  <Button icon={<AddIcon />}>Add</Button>
                  <Button
                    variant="outlined-secondary"
                    icon={<TrashIcon />}
                    textColor="error"
                    borderColor="error"
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          );
        }}
      />
    );
  },
};

export const ClickableRow: Story = {
  render: () => {
    return (
      <Table
        heads={['Id', 'Name', 'Email']}
        items={mockData}
        theadSx={{
          fontSize: '0.825rem',
          color: 'grey',
        }}
        renderItem={(item) => {
          return (
            <TableRow key={item.id} clickable>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
            </TableRow>
          );
        }}
      />
    );
  },
};

const SortedRowExample = () => {
  const { sortKey, sortDirection, onSort, sortedData } = useSort({
    data: mockData,
  });
  return (
    <Table
      heads={[
        {
          label: 'Id',
          key: 'id',
          sortable: true,
        },
        {
          label: 'Name',
          key: 'name',
          sortable: true,
        },
        {
          label: 'Email',
          key: 'email',
          sortable: true,
        },
      ]}
      items={sortedData}
      theadSx={{
        fontSize: '0.825rem',
        color: 'grey',
      }}
      sortKey={sortKey}
      sortDirection={sortDirection}
      onSort={(sortKey: string, sortDirection: string) =>
        onSort(sortKey, sortDirection)
      }
      leftAlignAll
      renderItem={(item) => {
        return (
          <TableRow key={item.id} clickable>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell align="left">{item.email}</TableCell>
          </TableRow>
        );
      }}
    />
  );
};

export const SortedRow: Story = {
  render: SortedRowExample,
};

export const NoData: Story = {
  render: () => {
    return <NoDataComponent text="No item found" />;
  },
};
