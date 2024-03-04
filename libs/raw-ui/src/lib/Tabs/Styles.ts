import { bearStyled, numToPx } from '@bearon/utils';
import React, { HTMLAttributes } from 'react';

export const StyledTabs = (
  props: {
    $spacing?: string | number;
    children?: React.ReactNode;
    $variant?: 'background' | 'underline';
  } & Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>
) => bearStyled('div', props)`
  .bear-tabs-ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
    width: fit-content;

    ${
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
      background-color: var(--tabs-bg);
    }`
        : ''
    }
    
    
    & li{
      overflow: hidden;
     	position: relative;
      padding-right: ${numToPx(props.$spacing, '0.5rem')};
      padding-left: ${numToPx(props.$spacing, '0.5rem')};
      &:first-child {
        padding-left: 0;
      }
    }

    & a {
      cursor: pointer;
      opacity: 0.7;
    }
    & a:hover, & a:focus-visible{
      opacity: 1;
    }
  }
`;

export const StyledTabsHover = (
  props: {
    $spacing?: string | number;
    children?: React.ReactNode;
  } & Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>
) => bearStyled('div', props)`
  .bear-tabs-ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    /* Any other sibling is hovered */
    &:hover li {
      --_translate: 100%;
      --_scale-delay: 200ms;
    }
    
    & li{
      overflow: hidden;
     	position: relative;
      padding-right: ${numToPx(props.$spacing, '0.5rem')};
      padding-left: ${numToPx(props.$spacing, '0.5rem')};
      &:first-child {
        padding-left: 0;
      }

      &::after {
        content: '';
        position: absolute;
        inset-inline: 0;
        inset-block-end: 0;
        block-size: 3px;
        background-color: var(--tabs-bg);
      
        translate: var(--_translate, 0);
        scale: var(--_scale, 0) 1;
        transition:
          scale 100ms var(--_scale-delay, 0ms), 
          translate 200ms;
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
    & a:hover, & a:focus-visible{
      opacity: 1;
    }
  }
`;
