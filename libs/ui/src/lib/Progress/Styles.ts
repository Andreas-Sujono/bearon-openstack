import { bearStyled } from '@bearon/utils';
import React from 'react';
import { TextVariant } from '../Text';

export const StyledProgress = (
  props: {
    $size?: TextVariant;
    children?: React.ReactNode;
  } & React.HTMLAttributes<HTMLDivElement>
) => bearStyled('div', props)`
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 0.2rem;
    gap: 8px;
    padding-right: 2rem;
`;
