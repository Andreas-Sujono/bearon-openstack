import { bearStyled } from '@bearon/utils';
import React from 'react';
import { ThemeColor } from '../ThemeProvider';

export const StyledModal = (
  props: {
    $overlayColor?: ThemeColor;
    children?: React.ReactNode;
  } & React.HTMLAttributes<HTMLDivElement>
) => bearStyled('div', props)`
  position: fixed;
  inset: 0; /* inset sets all 4 values (top right bottom left) much like how we set padding, margin etc., */
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;
  padding: 40px 20px 20px;
  transition: opacity 100ms ease-in-out;
  opacity: 0;

  &[data-status='entering'],&[data-status='entered']{
    opacity: 1;
  }
  &[data-status='exiting'],&[data-status='exited']{
    transition: opacity 300ms ease-in-out;
    opacity: 0;
  }
`;
