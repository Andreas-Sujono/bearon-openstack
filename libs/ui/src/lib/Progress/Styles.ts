import { bearStyled } from '@bearon/utils';
import React from 'react';

export const StyledProgress = (
  props: {
    children?: React.ReactNode;
  } & React.HTMLAttributes<HTMLDivElement>
) => bearStyled('div', props)`
    border-radius: 1rem;
    width: 100%;
    overflow: hidden;

    .bear-progress-active{
      width: var(--progress);
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1rem 0 0 1rem;
      transition: all var(--durationMd) var(--bezierFastoutSlowin);
      &[data-full='true']{
        border-radius: 1rem;
      }
    }
`;
