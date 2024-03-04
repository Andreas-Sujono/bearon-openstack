import { bearStyled, numToPx } from '@bearon/utils';
import React from 'react';
import { TextVariant } from '../Text';

const parseFontSize = (size?: string) => {
  if (size === 'xs') return `var(--fontSizeBodyXs)`;
  if (size === 'sm') return `var(--fontSizeBodysm)`;
  if (size === 'md') return `var(--fontSizeBodyMd)`;
  if (size === 'lg') return `var(--fontSizeBodyLg)`;
  if (size === 'xl') return `var(--fontSizeBodyXl)`;
  return `var(--fontSizeBodysm)`;
};

export const StyledBreadcrumbs = (
  props: {
    $gap?: string | number;
    $size?: TextVariant;
  } & React.HTMLAttributes<HTMLDivElement>
) => bearStyled('div', props)`
  display: flex;
  align-items: center;
  gap: ${numToPx(props.$gap, '8px')};
  font-size: ${parseFontSize(props.$size)};

  .bear-breacrumbs-item{
    cursor: pointer;
  }
  .bear-breacrumbs-item:last-child{
    color: var(--textLight);
    cursor: initial;
    &:hover{
      text-decoration: none;
    }
  }
`;
