import styled from 'styled-components';
import {
  InternalCommonStyleProps,
  parseColor,
  parseCommonProps,
} from '../utils';
import tinycolor from 'tinycolor2';

export const TableContainer = styled.div<InternalCommonStyleProps>`
  width: 100%;
  overflow: auto;
  ${(props) => parseCommonProps(props)}
`;

export const StyledTable = styled.table<InternalCommonStyleProps>`
  border-radius: 0.5rem;
  width: 100%;
  border-collapse: collapse;
  ${(props) => parseCommonProps(props)}
`;

export const StyledTableRow = styled.tr<
  InternalCommonStyleProps & { $borderColor?: string; $clickable?: boolean }
>`
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  &:last-child td,
  &:last-child th {
    border: 0;
  }
  border-bottom: 1px solid
    ${(props) =>
      props.$borderColor
        ? parseColor(props.$borderColor || 'grey')
        : tinycolor(props.theme.grey || '#bfbfbf')
            .setAlpha(0.4)
            .toRgbString()};

  ${(props) =>
    props.$clickable && {
      transition: 'all 0.16s ease-in-out',
      cursor: 'pointer',
      '&:hover': {
        background: `color-mix(
        in srgb,
        var(--grey) 4%,
        transparent
      )`,
      },
    }};
  ${(props) => parseCommonProps(props)}
`;

export const StyledTableCell = styled.td<InternalCommonStyleProps>`
  border: 0;
  padding: 0.8rem 1rem;
  ${(props) => parseCommonProps(props)}
`;

export const StyledTableHeadCell = styled.th<
  InternalCommonStyleProps & {
    $sortable?: boolean;
  }
>`
  border: 0;
  padding: 0.4rem 1rem;

  &:first-of-type {
    border-radius: 0.5rem 0 0 0;
  }
  &:last-child {
    border-radius: 0 0.5rem 0 0;
  }

  .hovered-arrow {
    transition: all 0.12s ease-in-out;
    visibility: hidden;
    opacity: 0;
  }
  ${(props) =>
    props.$sortable && {
      transition: 'all 0.12s ease-in-out',
      cursor: 'pointer',
      '> div:hover': {
        opacity: 0.7,
        '.hovered-arrow': {
          visibility: 'visible',
          opacity: 1,
        },
      },
    }}
  ${(props) => parseCommonProps(props)}
`;

export const StyledTableHead = styled.thead<InternalCommonStyleProps>`
  ${(props) => parseCommonProps(props)}
`;

export const StyledTableBodyCell = styled(
  StyledTableCell
)<InternalCommonStyleProps>`
  &:first-of-type {
    padding-left: 1rem;
  }
  &:last-child {
    padding-right: 1rem;
  }
`;

export const StyledTableBody = styled.tbody<InternalCommonStyleProps>`
  padding: 1rem;
`;
