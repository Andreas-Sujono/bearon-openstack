import React from 'react';
import { CSSProps, CommonStyleProps, parseProps } from '../utils';
import { Text } from '../Text';
import {
  StyledTableBody,
  StyledTable,
  StyledTableRow,
  TableContainer,
  StyledTableHead,
  StyledTableCell,
  StyledTableHeadCell,
} from './Styles';
import { ArrowDownIcon, ArrowUpIcon } from '../Icon';
import { Row } from '../Layout';

type TableHeadItem =
  | string
  | {
      sortable?: boolean;
      key?: string | number;
      label?: string;
    };
type SortDirection = 'asc' | 'desc' | (string & Record<never, never>);

export interface TableProps<T>
  extends CommonStyleProps,
    Omit<React.HTMLAttributes<HTMLTableElement>, 'color'> {
  heads: TableHeadItem[];
  items?: T[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderItem?: (item: T | any, index: number) => React.ReactElement;
  children?: React.ReactNode;
  renderHead?: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    headName: any,
    idx?: number
  ) => React.ReactElement | null;
  onSort?: (sortKey: string, sortDirection: string) => void;
  sortKey?: string;
  sortDirection?: SortDirection;

  widths?: string[];
  sx?: CSSProps;
  theadSx?: CSSProps;
  containerSx?: CSSProps;
  leftAlignAll?: boolean;
  isLoading?: boolean;
  loaderElement?: React.ReactElement;
  borderColor?: string;
}
export interface TableRowProps
  extends CommonStyleProps,
    Omit<React.HTMLAttributes<HTMLTableRowElement>, 'color'> {
  align?: 'left' | 'right' | 'center';
  clickable?: boolean;
}
export interface TableCellProps
  extends CommonStyleProps,
    Omit<React.HTMLAttributes<HTMLTableCellElement>, 'color'> {
  align?: 'left' | 'right' | 'center';
}

export const TableRow = ({ children, clickable, ...props }: TableRowProps) => {
  return (
    <StyledTableRow $clickable={clickable} {...parseProps(props)}>
      {children}
    </StyledTableRow>
  );
};

export const TableCell = ({ children, ...props }: TableCellProps) => {
  return <StyledTableCell {...parseProps(props)}>{children}</StyledTableCell>;
};

export const TableRowGap = ({
  sx = {},
  height = '8px',
}: TableRowProps & { height: string }) => {
  return (
    <StyledTableRow
      $sx={{
        height,
        ...sx,
      }}
    />
  );
};

export const TableHeadCell = ({
  children,
  sortable,
  sortDirection,
  onSort,
  active,
  sortKey,
  ...props
}: TableCellProps & {
  sortable?: boolean;
  sortDirection?: SortDirection;
  active?: boolean;
  sortKey?: string;
  onSort?: (sortKey: string, sortDirection: string) => void;
}) => {
  return (
    <StyledTableHeadCell {...parseProps(props)} $sortable={sortable}>
      <Row
        gap="3px"
        sx={{ width: '100%' }}
        onClick={() =>
          onSort &&
          onSort(
            sortKey as string,
            active && sortDirection === 'asc' ? 'desc' : 'asc'
          )
        }
      >
        {children}
        {sortable && sortDirection === 'asc' && active && (
          <ArrowUpIcon size="16px" />
        )}
        {sortable && sortDirection === 'desc' && active && (
          <ArrowDownIcon size="16px" />
        )}
        {sortable && !active && (
          <ArrowUpIcon
            sx={{ opacity: '0.2' }}
            size="16px"
            className="hovered-arrow"
          />
        )}
      </Row>
    </StyledTableHeadCell>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Table = <T, K extends keyof T>({
  heads,
  items,
  renderItem,
  children,
  renderHead = () => null,
  sx = {},
  theadSx = {},
  containerSx = {},
  leftAlignAll = false,
  widths = [],
  isLoading,
  loaderElement,
  borderColor,
  onSort,
  sortKey,
  sortDirection,
}: TableProps<T>) => {
  return (
    <TableContainer $sx={containerSx}>
      <StyledTable $sx={sx}>
        <StyledTableHead
          $sx={{
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem 0.5rem 0 0',
            ...theadSx,
          }}
          $background={(theadSx.background as string) || 'background'}
        >
          <StyledTableRow $borderColor={borderColor}>
            {heads.map(
              (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                item: any,
                idx
              ) =>
                renderHead(item, idx) || (
                  <TableHeadCell
                    key={item?.key || (item as string)}
                    sx={{
                      width: widths[idx],
                    }}
                    sortable={item?.sortable || false}
                    sortDirection={sortDirection}
                    sortKey={item.key}
                    active={sortKey === item?.key}
                    onSort={onSort}
                  >
                    <Text
                      sx={{
                        ml:
                          idx === heads.length - 1 && !leftAlignAll
                            ? 'auto'
                            : 'initial',
                        width: 'max-content',
                        display: 'block',
                        fontWeight: '500',
                      }}
                      colour="textLight"
                    >
                      {item?.label || (item as string)}
                    </Text>
                  </TableHeadCell>
                )
            )}
          </StyledTableRow>
        </StyledTableHead>
        <StyledTableBody>
          {!isLoading &&
            items?.map(
              (item, index: number) => renderItem && renderItem(item, index)
            )}
          {children}
        </StyledTableBody>
      </StyledTable>
      {isLoading && loaderElement}
    </TableContainer>
  );
};

export { Table };
