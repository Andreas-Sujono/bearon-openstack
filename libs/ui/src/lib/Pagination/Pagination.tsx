import { classes } from '@bearon/utils';
import React, { HTMLAttributes } from 'react';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
} from '../utils/styles';
import { TextVariant } from '../Text';
import { ThemeColor } from '../ThemeProvider';
import { StyledPagination } from './Styles';

export interface PaginationProps
  extends HTMLAttributes<HTMLDivElement>,
    BearStyleProps {
  size?: TextVariant;
  textColor?: ThemeColor;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  disabled?: boolean;
  totalPageShown?: [number, number, number]; //by default 1 in left, 3 in middle, and 1 in right
}

export default function Pagination({
  className,
  size = 'sm',
  textColor,
  currentPage = 1,
  pageSize = 10,
  totalCount = 1,
  disabled,
  totalPageShown,
  ...props
}: PaginationProps) {
  const [styleProps, rest] = extractStyleProps(props);

  const styleClass = React.useMemo(() => {
    styleProps.background = undefined;
    return createBearStyleClass(styleProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps)]);

  const totalPage = Math.ceil(totalCount / pageSize);
  const array = Array.from({ length: totalPage }).map((item, idx) => idx + 1);

  return (
    <StyledPagination
      className={classes(styleClass, 'bear-pagination', className)}
      $size={size}
      {...rest}
    >
      {array.map((item) => (
        <div>{item}</div>
      ))}
    </StyledPagination>
  );
}
