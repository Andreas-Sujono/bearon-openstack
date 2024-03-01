import styled from 'styled-components';
import { InternalCommonStyleProps, parseCommonProps } from '../../utils';

export const StyledInput = styled.input.attrs((props) => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onWheel: (e: any) => e.target.blur(),
  onKeyDown: (evt: React.KeyboardEvent<HTMLInputElement>) =>
    props.type === 'number' &&
    ['e', 'E', '+', '-'].includes(evt.key) &&
    evt.preventDefault(),
  pattern: props.type === 'number' ? '^[0-9]*[.,]?[0-9]*$' : undefined,
  type: props.type,
}))<{
  $isLoading?: boolean;
}>`
  background-color: var(--backgroundLight);
  border: 1px solid var(--grey);
  padding: 0.4rem 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  flex-grow: 1;
  color: ${(props) =>
    props.$isLoading ? props.theme.textLight : props.theme.textBody};
  opacity: ${(props) => (props.$isLoading ? '0.5' : '1')};
  outline: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus-visible {
    outline: 1px solid ${(props) => props.theme?.accent};
  }
  &:active,
  &:focus {
    outline-color: transparent;
  }

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledLabel = styled.label<InternalCommonStyleProps>`
  color: var(--textLight);
  font-size: 0.875rem;
  display: block;
  margin-bottom: 0.325rem;
  ${(props) => parseCommonProps(props)}
`;
