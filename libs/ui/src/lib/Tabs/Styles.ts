import styled from 'styled-components';
import {
  InternalCommonStyleProps,
  getDefaultClassName,
  numToPx,
  parseColor,
} from '../utils';

export const StyledTabs = styled.div<
  InternalCommonStyleProps & {
    $spacing?: string | number;
    $variant?: 'background' | 'underline';
    $background?: string;
  }
>`
  ${'.' + getDefaultClassName('tabs-ul')} {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
    width: fit-content;

    ${(props) =>
      props.$variant === 'underline'
        ? `&::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 2px;
      scale: var(--_width, 0) 1;
      translate: var(--_left, 0) 0;
      transform-origin: left;
      transition: scale 120ms, translate 120ms;
      background-color: ${parseColor(props.$background)};
    }`
        : ''}

    & li {
      overflow: hidden;
      position: relative;
      padding-right: ${(props) => numToPx(props.$spacing, '0.5rem')};
      padding-left: ${(props) => numToPx(props.$spacing, '0.5rem')};
      &:first-child {
        padding-left: 0;
      }
    }

    & a {
      cursor: pointer;
      opacity: 0.7;
    }
    & a:hover,
    & a:focus-visible {
      opacity: 1;
    }
  }
`;

export const StyledTabsHover = styled.div<
  InternalCommonStyleProps & {
    $spacing?: string | number;
    $background?: string;
  }
>`
  ${'.' + getDefaultClassName('tabs-ul')} {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    /* Any other sibling is hovered */
    &:hover li {
      --_translate: 100%;
      --_scale-delay: 200ms;
    }

    & li {
      overflow: hidden;
      position: relative;
      padding-right: ${(props) => numToPx(props.$spacing, '0.5rem')};
      padding-left: ${(props) => numToPx(props.$spacing, '0.5rem')};
      &:first-child {
        padding-left: 0;
      }

      &::after {
        content: '';
        position: absolute;
        inset-inline: 0;
        inset-block-end: 0;
        block-size: 3px;
        background-color: ${(props) => parseColor(props.$background)};

        translate: var(--_translate, 0);
        scale: var(--_scale, 0) 1;
        transition: scale 100ms var(--_scale-delay, 0ms), translate 200ms;
      }

      &:hover ~ li {
        --_translate: -100%;
        --_scale-delay: 200ms;
      }

      &:hover {
        --_scale: 1;
        --_translate: 0;
        --_scale-delay: 0ms;
      }
    }

    & a {
      cursor: pointer;
      opacity: 0.7;
    }
    & a:hover,
    & a:focus-visible {
      opacity: 1;
    }
  }
`;
