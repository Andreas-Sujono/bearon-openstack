import { useState } from 'react';
import styled from 'styled-components';
import type { Meta } from '@storybook/react';
import { Box } from '../../Layout';
import Transition from '.';

const meta: Meta<typeof Transition> = {
  title: 'Components/Transition',
  component: Transition,
  tags: ['autodocs'],
};
export default meta;

const StyledBox = styled(Box)`
  padding: 1rem;
  height: 200px;
  margin-top: 1rem;
  max-width: 300px;
  background-color: grey;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  transition: all 1s ease-in-out;
  opacity: 0;

  &[data-status='entering'],
  &[data-status='entered'] {
    opacity: 1;
  }
  &[data-status='exiting'] {
    opacity: 0;
  }
`;

const BasicTransitionComponent = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>

      <Transition timeout={800} in={show} unmount>
        {(show, status) => (
          <StyledBox data-status={status}>status: {status}</StyledBox>
        )}
      </Transition>
    </>
  );
};

export const BasicTransition = {
  render: BasicTransitionComponent,
};
