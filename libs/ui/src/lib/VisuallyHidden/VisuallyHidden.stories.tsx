import styled from 'styled-components';
import type { Meta } from '@storybook/react';
import { Text } from '../Text';
import { VisuallyHidden } from './index';

const meta: Meta<typeof VisuallyHidden> = {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
  tags: ['autodocs'],
};
export default meta;

const StyledBox = styled.div`
  padding: 1rem;
  height: 200px;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
`;

export const VisuallyHiddenSample = {
  render: () => {
    return (
      <StyledBox>
        <Text>This is used to label some animation, image, figure, etc</Text>
        <VisuallyHidden>
          this is a hidden text that only be visible by text reader
        </VisuallyHidden>
      </StyledBox>
    );
  },
};
