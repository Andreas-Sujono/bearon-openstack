import { bearCss } from '@bearon/utils';
import Box from '../Layout/Box';
import Text from '../Text';
import type { Meta } from '@storybook/react';
import VisuallyHidden from '.';

const meta: Meta<typeof VisuallyHidden> = {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
  tags: ['autodocs'],
};
export default meta;

const boxClass = bearCss`
  padding: 1rem;
  height: 200px;
  background-color: lightgrey;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export const VisuallyHiddenSample = {
  render: () => {
    return (
      <Box className={boxClass}>
        <Text>This is used to label some animation, image, figure, etc</Text>
        <VisuallyHidden>
          this is a hidden text that only be visible by text reader
        </VisuallyHidden>
      </Box>
    );
  },
};
