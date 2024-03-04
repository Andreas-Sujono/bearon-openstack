import { useState } from 'react';
import type { Meta } from '@storybook/react';
import { ClickAwayListener } from '.';
import { Box } from '../Layout/Box';
import { css } from 'goober';

const meta: Meta<typeof ClickAwayListener> = {
  title: 'Components/ClickAwayListener',
  component: ClickAwayListener,
  tags: ['autodocs'],
};
export default meta;

const boxClass = css`
  padding: 1rem;
  height: 200px;
  margin-top: 1rem;
  max-width: 300px;
  background-color: grey;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  transition: all 1s ease-in-out;
  gap: 1rem;
`;

const BasicClickAwayListenerComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <ClickAwayListener onClickAway={() => setCounter(counter + 1)}>
      <Box className={boxClass}>
        <div>try to click outside!</div>
        <div>Counter: {counter}</div>
      </Box>
    </ClickAwayListener>
  );
};

export const ClickAwayListenerSample = {
  render: BasicClickAwayListenerComponent,
};
