import styled, { keyframes } from 'styled-components';
import tinycolor from 'tinycolor2';
import { TextVariant } from '../Text';
import { parseFontSize } from '../Text/styles';
import { getDefaultClassName, parseCommonProps } from '../utils';

const rippleEffect = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(20);
    opacity: 0.375;
  }
  100% {
    transform: scale(50);
    opacity: 0;
  }
`;

export const StyledButton = styled.button<{
  $size?: TextVariant;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $parsedStyle?: any;
  $textShift?: boolean;
}>`
  ${(props) => props.$parsedStyle};
  --final-btn-background: ${(props) => props.$parsedStyle?.background};
  --btn-background: ${(props) => props.$parsedStyle?.background};
  --btn-color: ${(props) => props.$parsedStyle?.color};

  cursor: pointer;
  border-radius: 0.5rem;
  text-transform: none;
  transition-property: opacity, color, background;
  transition-duration: var(--durationSm);
  transition-timing-function: var(--bezierFastoutSlowin);
  position: relative;
  overflow: hidden;
  outline-color: transparent;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--final-btn-background);

  &:empty {
    padding: 0.5em;
  }

  &[data-clip='true'] {
    background-color: transparent;
  }

  > *:nth-child(2) {
    margin-left: 0.3rem;
  }

  > * {
    cursor: inherit;
    pointer-events: none;
  }

  > .bt-child {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 0;
  }

  &:hover {
    --final-btn-background: color-mix(
      in srgb,
      var(--btn-background) 90%,
      black
    );
  }
  &:active {
    --final-btn-background: color-mix(
      in srgb,
      var(--btn-background) 86%,
      black
    );
  }
  &:focus-visible {
    outline-color: var(--accent);
    outline-offset: 0px;
    outline-width: 5px;
    // box-shadow: var(--accent) 1px 1px 1px 0px;
  }
  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.9);

    &[data-variant='contained'] {
      --final-btn-background: color-mix(
        in srgb,
        var(--btn-background) 90%,
        black
      );
    }
  }
  &[data-variant='text']:hover,
  &[data-variant='outlined']:hover,
  &[data-variant='outlined-secondary']:hover {
    --final-btn-background: color-mix(
      in srgb,
      var(--btn-color) 8%,
      transparent
    );
    filter: none;
  }

  &:active {
    /* background-color: #${(props) =>
      tinycolor(props.theme.primary).darken(0.5).toHex()} !important; */
    background-size: 100%;
    transition: all 0.12s ease-in, background 0s;
  }

  font-size: ${(props) => parseFontSize(props.$size)};

  &[data-clip='true'][data-variant='contained']::after {
    content: '';
    transition-property: opacity, color, background;
    transition-duration: var(--durationSm);
    transition-timing-function: var(--bezierFastoutSlowin);
    background: var(--final-btn-background);
    position: absolute;
    inset: 0;
    z-index: -1;
    clip-path: polygon(
      0 0,
      100% 0,
      100% calc(100% - 10px),
      calc(100% - 10px) 100%,
      0 100%
    );
  }

  .${getDefaultClassName('btnRipple')} {
    width: 20px;
    height: 20px;
    position: absolute !important;
    background: rgba(255, 255, 255, 0.2);
    display: block;
    content: '';
    border-radius: 9999px;
    opacity: 1;
    animation: 0.6s ease 1 forwards ${rippleEffect};
  }

  ${(props) =>
    props.$textShift && {
      position: 'relative',
      left: props.$size === 'xs' || props.$size === 'xxs' ? '-0.75em' : '-1em',
    }}

  ${(props) => parseCommonProps(props)};
`;
