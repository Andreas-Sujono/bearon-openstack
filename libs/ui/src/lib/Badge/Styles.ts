import { TextVariant } from '../Text';
import styled from 'styled-components';
import { InternalCommonStyleProps, parseCommonProps } from '../utils';
import { parseFontSize } from '../Text/styles';

const parseSize = (size?: TextVariant) => {
  if (size === 'xs') return `0.325rem 0.5rem`;
  if (size === 'sm') return `0.5rem 0.725rem`;
  if (size === 'md') return `0.875rem 1rem`;
  if (size === 'lg') return `1rem 1.25rem`;
  if (size === 'xl') return `1.5rem`;
  if (size === 'h5') return `2rem`;
  if (size === 'h4') return `3rem`;
  if (size === 'h3') return `4rem`;
  if (size === 'h2') return `5rem`;
  if (size === 'h1') return `6rem`;
  return `0.5rem 0.725rem`;
};

export const StyledBadge = styled.div<
  {
    $size?: TextVariant;
  } & InternalCommonStyleProps
>`
  color: white;
  padding: ${(props) => parseSize(props.$size)};
  font-size: ${(props) => parseFontSize(props.$size)};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: min-content;
  white-space: nowrap;
  border-radius: 0.5rem;
  gap: 2px;
  box-sizing: border-box;
  ${(props) => parseCommonProps(props)};
`;
