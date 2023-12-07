import { classes } from '@bearon/utils';
import { ChevronLeftIcon, ChevronRightIcon } from '@bearon/icon';
import React, { HTMLAttributes } from 'react';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
} from '../utils/styles';
import { TextVariant } from '../Text';
import { ThemeColor } from '../ThemeProvider';
import Button from '../Button/Button';
import { StyledPagination, StyledPaginationItem } from './Styles';

export interface PaginationProps
  extends HTMLAttributes<HTMLDivElement>,
    BearStyleProps {
  size?: TextVariant;
  activeBackground?: ThemeColor;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  disabled?: boolean;
  totalPageShown?: [number, number, number]; //by default 1 in left, 3 in middle, and 1 in right
  onClickPrev?: (prevPage: number) => void;
  onClickNext?: (next: number) => void;
  gap?: string | number;
}

export default function Pagination({
  className,
  size = 'sm',
  currentPage = 5,
  pageSize = 10,
  totalCount = 1,
  disabled,
  totalPageShown = [1, 3, 1],
  activeBackground = 'grey',
  onClickPrev,
  onClickNext,
  gap,
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

  const leftItems = array.slice(0, totalPageShown[0]);
  const rightItems = array
    .slice(totalPageShown[0] + totalPageShown[1])
    .slice(-totalPageShown[2]);

  const midLeftItems = array.slice(
    Math.max(currentPage - 1 - Math.floor(totalPageShown[1] / 2), 0),
    currentPage - 1
  );
  const midRightItems = array.slice(
    currentPage,
    currentPage + 1 + totalPageShown[1] - midLeftItems.length
  );
  const allMidItems = midLeftItems
    .concat(currentPage)
    .concat(midRightItems)
    .filter((item) => !leftItems.includes(item) && !rightItems.includes(item));

  let midItems = [...allMidItems];
  const shouldRenderLeftDot = (leftItems.at(-1) || 0) + 1 !== midItems[0];
  const shouldRenderRightDot = rightItems.at(0) !== (midItems.at(-1) || 0) + 1;

  console.log('midItems: ', midItems);
  if (shouldRenderLeftDot && shouldRenderRightDot) {
    midItems = allMidItems.slice(0, totalPageShown[1]);
  } else if (shouldRenderLeftDot) {
    //when no right dot, need to replace with next page
    midItems = allMidItems.slice(0, totalPageShown[1]);
    midItems = midItems
      .concat((midItems.at(-1) || 0) + 1)
      .filter(
        (item) => !leftItems.includes(item) && !rightItems.includes(item)
      );
  } else if (shouldRenderRightDot) {
    //when no left dot, need to replace with prev page
    const start = Math.max(-totalPageShown[1] - 2, 0);
    midItems = allMidItems.slice(start, start + totalPageShown[1] + 1);
  }

  const handleClickPrev = () => {
    if (currentPage !== 1 && onClickPrev) {
      onClickPrev(currentPage - 1);
    }
  };

  const handleClickNext = () => {
    if (currentPage !== totalPage && onClickNext) {
      onClickNext(currentPage + 1);
    }
  };

  return (
    <StyledPagination
      className={classes(styleClass, 'bear-pagination', className)}
      $size={size}
      $gap={gap}
      {...rest}
    >
      <Button
        variant="text"
        disabled={currentPage === 1}
        onClick={handleClickPrev}
        icon={
          <ChevronLeftIcon
            color="var(--textLight)"
            width="18px"
            height="18px"
          />
        }
      ></Button>
      {leftItems.map((item) => (
        <StyledPaginationItem
          key={item}
          data-active={currentPage === item}
          $activeBackground={activeBackground}
        >
          {item}
        </StyledPaginationItem>
      ))}
      {shouldRenderLeftDot && <StyledPaginationItem>...</StyledPaginationItem>}
      {midItems.map((item) => (
        <StyledPaginationItem
          key={item}
          data-active={currentPage === item}
          $activeBackground={activeBackground}
        >
          {item}
        </StyledPaginationItem>
      ))}
      {shouldRenderRightDot && <StyledPaginationItem>...</StyledPaginationItem>}
      {rightItems.map((item) => (
        <StyledPaginationItem
          key={item}
          data-active={currentPage === item}
          $activeBackground={activeBackground}
        >
          {item}
        </StyledPaginationItem>
      ))}
      <Button
        variant="text"
        disabled={currentPage === totalPage}
        icon={
          <ChevronRightIcon
            color="var(--textLight)"
            width="18px"
            height="18px"
          />
        }
        onClick={handleClickNext}
      ></Button>
    </StyledPagination>
  );
}
