import { bearCss } from '@bearon/utils';
import { useState } from 'react';
import Box from '../../Layout/Box';
import type { Meta } from '@storybook/react';
import Transition from '.';

const meta: Meta<typeof Transition> = {
  title: 'Animation/Transition',
  component: Transition,
  tags: ['autodocs'],
};
export default meta;

const boxClass = bearCss`
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

  &[data-status="entering"], &[data-status="entered"]{
    opacity: 1;
  }
  &[data-status="exiting"]{
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
          <Box className={boxClass} data-status={status}>
            status: {status}
          </Box>
        )}
      </Transition>
    </>
  );
};

export const BasicTransition = {
  render: BasicTransitionComponent,
};
