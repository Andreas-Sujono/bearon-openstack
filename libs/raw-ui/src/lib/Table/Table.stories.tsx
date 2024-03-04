import { TrashIcon } from '@bearon/icon';
import { Button } from '../Button';
import Text from '../Text';
import Row from '../Layout/Row';
import Box from '../Layout/Box';
import { Table, TableRow } from './Table';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
};
export default meta;

const headers = [
  {
    label: 'id',
    value: 'id',
    align: 'left',
  },
  {
    label: 'name',
    value: 'name',
    align: 'left',
  },
  {
    label: 'email',
    value: 'email',
    align: 'left',
  },
  {
    label: 'Created date',
    value: 'created_at',
    align: 'left',
  },
  {
    label: 'Actions',
    value: 'action',
    align: 'right',
  },
];

const data = [
  {
    id: 1,
    name: 'name1',
    email: 'test@gmail.com',
    created_at: new Date(),
  },
  {
    id: 2,
    name: 'name2',
    email: 'test2@gmail.com',
    created_at: new Date(),
  },
  {
    id: 3,
    name: 'John',
    email: 'test3@gmail.com',
    created_at: new Date(),
  },
  {
    id: 4,
    name: 'Angel',
    email: 'test4@gmail.com',
    created_at: new Date(),
  },
];

export const sampleTable = {
  render: () => {
    return (
      <Box background="background" sx={{ padding: '1rem' }}>
        <Table
          headers={headers}
          data={data}
          background="backgroundLight"
          sx={{ width: '100%' }}
          renderItem={(item) => (
            <TableRow key={item.id}>
              <td>
                <Text colour="textLight">{item.id}</Text>
              </td>
              <td>
                <Text colour="textLight">{item.name}</Text>
              </td>
              <td>
                <Text colour="textLight">{item.email}</Text>
              </td>
              <td>
                <Text colour="textLight">
                  {item.created_at.toLocaleDateString()}
                </Text>
              </td>
              <td>
                <Row justifyContent="flex-end">
                  <Button
                    icon={<TrashIcon size="20px" color="var(--grey)" />}
                    variant="text"
                  ></Button>
                </Row>
              </td>
            </TableRow>
          )}
        ></Table>
      </Box>
    );
  },
};

export const StripesTable = {
  render: () => {
    return (
      <Box background="background" sx={{ padding: '1rem' }}>
        <Table
          headers={headers}
          data={data}
          background="backgroundLight"
          sx={{ width: '100%' }}
          renderItem={(item, idx) => (
            <TableRow
              background={idx % 2 === 0 ? 'background' : 'backgroundLight'}
              key={item.id}
            >
              <td>
                <Text colour="textLight">{item.id}</Text>
              </td>
              <td>
                <Text colour="textLight">{item.name}</Text>
              </td>
              <td>
                <Text colour="textLight">{item.email}</Text>
              </td>
              <td>
                <Text colour="textLight">
                  {item.created_at.toLocaleDateString()}
                </Text>
              </td>
              <td>
                <Row justifyContent="flex-end">
                  <Button
                    icon={<TrashIcon size="20px" color="var(--grey)" />}
                    variant="text"
                  ></Button>
                </Row>
              </td>
            </TableRow>
          )}
        ></Table>
      </Box>
    );
  },
};
