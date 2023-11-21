import { bearCss } from '@bearon/utils';
import SimpleGrid from './SimpleGrid';
import Box from './Box';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof SimpleGrid> = {
  title: 'Foundation/Container',
  component: SimpleGrid,
  tags: ['autodocs'],
};
export default meta;

const boxClass = bearCss`
  padding: 1rem;
  height: 200px;
  background-color: grey;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;
export const SimpleGridExample = {
  render: () => {
    return (
      <SimpleGrid
        spacing="1rem"
        justifyContent="center"
        alignitems="center"
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      >
        <Box className={boxClass}>1</Box>
        <Box className={boxClass}>2</Box>
        <Box className={boxClass}>3</Box>
        <Box className={boxClass}>4</Box>
        <Box className={boxClass}>5</Box>
        <Box className={boxClass}>6</Box>
        <Box className={boxClass}>7</Box>
        <Box className={boxClass}>8</Box>
        <Box className={boxClass}>9</Box>
      </SimpleGrid>
    );
  },
};
