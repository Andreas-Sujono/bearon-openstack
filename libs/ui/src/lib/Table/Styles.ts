import { bearStyled } from '@bearon/utils';
import React from 'react';
import { TextVariant } from '../Text';

export const StyledTable = (
  props: {
    $size?: TextVariant;
    children?: React.ReactNode;
  } & React.HTMLAttributes<HTMLDivElement>
) => bearStyled('table', props)`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0px;
  border-radius: 0.5rem;

  & tr{
    color: inherit;
    display: table-row;
    vertical-align: middle;
    outline: 0px;
  }

  & th, & td{
    font-size: 0.875rem;
    line-height: 1.5rem;
    letter-spacing: 0.01071em;
    display: table-cell;
    vertical-align: inherit;
    border-bottom: 1px solid rgb(var(--rgbGrey) / 0.3);
    padding: 0.5rem 1rem;
  }
  & th{
    font-weight: 500;
    font-size: 0.875rem;
  }
`;
