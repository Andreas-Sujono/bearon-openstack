import { classes } from '@bearon/utils';
import React, { HTMLAttributes } from 'react';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
} from '../utils/styles';
import Text, { TextVariant } from '../Text';
import { ThemeColor } from '../ThemeProvider';
import { StyledTable } from './Styles';

export interface TableHeaderItem {
  label: string;
  value?: string | number;
  align?: 'left' | 'center' | 'right' | string;
}

export interface TableProps<T>
  extends HTMLAttributes<HTMLDivElement>,
    BearStyleProps {
  headers: TableHeaderItem[];
  onSort?: (headerValue?: string | number) => void;
  headerSize?: TextVariant;
  headerColor?: ThemeColor;
  renderItem: (item: T, idx: number) => React.ReactNode;
  data: T[];
}
/**
 * simple table with simple header
 * TODO featurus: sticky header, virtualized table, sorting
 */
export function Table<T>({
  className,
  headers,
  onSort,
  headerSize,
  headerColor,
  renderItem,
  data,
  ...props
}: TableProps<T>) {
  const [styleProps, rest] = extractStyleProps(props);

  const styleClass = React.useMemo(() => {
    return createBearStyleClass(styleProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps)]);

  return (
    <StyledTable
      className={classes(styleClass, 'bear-progress', className)}
      {...rest}
    >
      <thead>
        <tr>
          {headers.map((item) => (
            <th
              data-value={item.value}
              key={item.value}
              align={item.align as 'left'}
            >
              <Text size={headerSize} colour={headerColor}>
                {item.label}
              </Text>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item, idx) => renderItem(item, idx))}</tbody>
    </StyledTable>
  );
}

export const TableRow = (
  props: React.HTMLAttributes<HTMLTableRowElement> & BearStyleProps
) => {
  const [styleProps, rest] = extractStyleProps(props);

  const styleClass = React.useMemo(() => {
    return createBearStyleClass(styleProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps)]);

  return <tr className={classes(styleClass, props.className)} {...rest}></tr>;
};
