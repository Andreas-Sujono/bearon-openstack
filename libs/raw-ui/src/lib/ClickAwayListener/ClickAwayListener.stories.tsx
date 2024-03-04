import { bearCss } from '@bearon/utils';
import { useState } from 'react';
import Box from '../Layout/Box';
import type { Meta } from '@storybook/react';
import ClickAwayListener from '.';

const meta: Meta<typeof ClickAwayListener> = {
  title: 'Components/ClickAwayListener',
  component: ClickAwayListener,
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
  font-size: 1.2rem;
  transition: all 1s ease-in-out;
`;

const BasicClickAwayListenerComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <ClickAwayListener onClickAway={() => setCounter(counter + 1)}>
      <Box className={boxClass}>try to click outside! - ${counter}</Box>
    </ClickAwayListener>
  );
};

export const ClickAwayListenerSample = {
  render: BasicClickAwayListenerComponent,
};
