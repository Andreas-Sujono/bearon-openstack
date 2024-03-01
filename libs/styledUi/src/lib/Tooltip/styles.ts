import styled from 'styled-components';
import tinycolor from 'tinycolor2';
import { getDefaultClassName, parseColor } from '../utils';

export const StyledPopper = styled.div<{ $bg?: string; $textColor?: string }>`
  background: ${(props) =>
    props.$bg
      ? parseColor(props.$bg)
      : '#' + tinycolor(props.theme.grey).toHex()};
  color: ${(props) =>
    props.$textColor ? parseColor(props.$textColor) : 'white'};
  font-weight: bold;
  padding: 4px 8px;
  font-size: 13px;
  border-radius: 4px;
  z-index: 100;

  ${'.' + getDefaultClassName('tooltip-arrow')},
  ${'.' + getDefaultClassName('tooltip-arrow')}::before {
    position: absolute;
    width: 8px;
    height: 8px;
    background: inherit;
    transition: opacity 0ms ease-in-out;
  }

  ${'.' + getDefaultClassName('tooltip-arrow')} {
    visibility: hidden;
  }

  ${'.' + getDefaultClassName('tooltip-arrow')}::before {
    visibility: visible;
    content: '';
    transform: rotate(45deg);
  }

  --arrow-pos: 4px;
  &[data-popper-placement^='top']
    > ${'.' + getDefaultClassName('tooltip-arrow')} {
    bottom: var(--arrow-pos);
  }

  &[data-popper-placement^='bottom']
    > ${'.' + getDefaultClassName('tooltip-arrow')} {
    top: var(--arrow-pos);
  }

  &[data-popper-placement^='left']
    > ${'.' + getDefaultClassName('tooltip-arrow')} {
    right: var(--arrow-pos);
  }

  &[data-popper-placement^='right']
    > ${'.' + getDefaultClassName('tooltip-arrow')} {
    left: var(--arrow-pos);
  }
`;

export const StyledPopperContainer = styled.div`
  transition: opacity 200ms ease-in-out;
  z-index: 100;

  opacity: 0;

  &[data-status='entering'],
  &[data-status='entered'] {
    opacity: 1;
  }
  &[data-status='exiting'],
  &[data-status='exited'] {
    transition: opacity 100ms ease-in-out;
    opacity: 0;
  }

  &[data-popper-placement^='top'] {
    padding: 0.5rem;
  }
  &[data-popper-placement^='bottom'] {
    padding: 0.5rem;
  }
  &[data-popper-placement^='left'] {
    padding: 0.5rem;
  }
  &[data-popper-placement^='right'] {
    padding: 0.5rem;
  }
`;
