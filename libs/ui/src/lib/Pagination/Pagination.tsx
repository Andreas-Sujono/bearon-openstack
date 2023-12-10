import { classes } from '@bearon/utils';
import { ChevronLeftIcon, ChevronRightIcon } from '@bearon/icon';
import React, { HTMLAttributes } from 'react';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
} from '../utils/styles';
import Text, { TextVariant } from '../Text';
import { ThemeColor } from '../ThemeProvider';
import { Button } from '../Button/Button';
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
  setPage?: (page: number) => void;
  gap?: string | number;
}

export function Pagination({
  className,
  size = 'sm',
  currentPage = 5,
  pageSize = 10,
  totalCount = 1,
  disabled,
  totalPageShown = [1, 3, 1],
  activeBackground = 'grey',
  setPage,
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
    .slice(-totalPageShown[2])
    .filter((item) => !leftItems.includes(item));

  const shouldRenderDot =
    totalPageShown.reduce((acc, cur) => acc + cur) < totalPage - 1;
  const shouldRenderLeftDot =
    shouldRenderDot && currentPage >= totalPageShown[0] + totalPageShown[1];
  const shouldRenderRightDot =
    shouldRenderDot &&
    currentPage <=
      totalPage - totalPageShown[0] - totalPageShown[1] - totalPageShown[2] + 1;

  let midItems = [] as number[];
  if (shouldRenderLeftDot && shouldRenderRightDot) {
    //get middle items
    midItems = array
      .slice(
        Math.max(currentPage - 1 - Math.floor(totalPageShown[1] / 2), 0),
        currentPage - 1
      )
      .concat(currentPage)
      .concat(array.slice(currentPage, currentPage + 1 + totalPageShown[1]))
      .filter((item) => !leftItems.includes(item) && !rightItems.includes(item))
      .slice(0, totalPageShown[1]);
  } else if (shouldRenderRightDot) {
    midItems = array.slice(totalPageShown[0], totalPageShown[1] + 2);
  } else if (shouldRenderLeftDot) {
    midItems = array.slice(-totalPageShown[1] - 2, -rightItems.length);
  } else {
    //get middle items
    midItems = array.slice(totalPageShown[0], -rightItems.length);
  }

  const handleClickPrev = () => {
    if (currentPage !== 1 && setPage) {
      setPage(currentPage - 1);
    }
  };

  const handleClickNext = () => {
    if (currentPage !== totalPage && setPage) {
      setPage(currentPage + 1);
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
        textColor={activeBackground}
        className="bear-pagination-arrow-btn"
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
          onClick={() => setPage && setPage(item)}
          $size={size}
          aria-selected={currentPage === item}
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
          onClick={() => setPage && setPage(item)}
          $size={size}
          aria-selected={currentPage === item}
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
          onClick={() => setPage && setPage(item)}
          $size={size}
          aria-selected={currentPage === item}
        >
          {item}
        </StyledPaginationItem>
      ))}
      <Button
        variant="text"
        disabled={currentPage === totalPage}
        textColor={activeBackground}
        className="bear-pagination-arrow-btn"
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

export const MinimalPagination = ({
  className,
  size = 'xs',
  currentPage = 5,
  pageSize = 10,
  totalCount = 1,
  disabled,
  setPage,
  gap,
  ...props
}: PaginationProps) => {
  const [styleProps, rest] = extractStyleProps(props);

  const styleClass = React.useMemo(() => {
    styleProps.background = undefined;
    return createBearStyleClass(styleProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps)]);

  const totalPage = Math.ceil(totalCount / pageSize);

  const handleClickPrev = () => {
    if (currentPage !== 1 && setPage) {
      setPage(currentPage - 1);
    }
  };

  const handleClickNext = () => {
    if (currentPage !== totalPage && setPage) {
      setPage(currentPage + 1);
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
        textColor={'grey'}
        className="bear-pagination-arrow-btn"
        icon={
          <ChevronLeftIcon color="var(--textBody)" width="18px" height="18px" />
        }
      ></Button>
      <Text size={size} colour="textLight">
        Page {currentPage} of {totalPage}
      </Text>

      <Button
        variant="text"
        disabled={currentPage === totalPage}
        textColor="grey"
        className="bear-pagination-arrow-btn"
        icon={
          <ChevronRightIcon
            color="var(--textBody)"
            width="18px"
            height="18px"
          />
        }
        onClick={handleClickNext}
      ></Button>
    </StyledPagination>
  );
};
