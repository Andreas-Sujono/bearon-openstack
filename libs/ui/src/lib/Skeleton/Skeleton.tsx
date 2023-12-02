//based on https://github.com/dvtng/react-loading-skeleton/blob/master/src/Skeleton.tsx
import React, { CSSProperties, PropsWithChildren, ReactElement } from 'react';
import { classes, numToPx } from '@bearon/utils';
import styles from './Skeleton.module.scss';

const defaultEnableAnimation = true;

function styleOptionsToCssProperties({
  baseColor,
  highlightColor,
  width,
  height,
  borderRadius,
  circle,
  direction,
  duration,
  enableAnimation = defaultEnableAnimation,
  ml,
  mt,
  mb,
  mr,
}: SkeletonProps & { circle: boolean }): CSSProperties {
  const style: CSSProperties & Record<`--${string}`, string> = {};

  if (direction === 'rtl') style['--animation-direction'] = 'reverse';
  if (typeof duration === 'number')
    style['--animation-duration'] = `${duration}s`;
  if (!enableAnimation) style['--pseudo-element-display'] = 'none';

  if (typeof width === 'string' || typeof width === 'number')
    style.width = width;
  if (typeof height === 'string' || typeof height === 'number')
    style.height = height;

  if (typeof borderRadius === 'string' || typeof borderRadius === 'number')
    style.borderRadius = borderRadius;

  if (circle) style.borderRadius = '50%';

  if (typeof baseColor !== 'undefined') style['--base-color'] = baseColor;
  if (typeof highlightColor !== 'undefined')
    style['--highlight-color'] = highlightColor;
  if (ml) {
    style.marginLeft = numToPx(ml);
  }
  if (mt) {
    style.marginTop = numToPx(mt);
  }
  if (mb) {
    style.marginBottom = numToPx(mb);
  }
  if (mr) {
    style.marginRight = numToPx(mr);
  }

  return style;
}

export interface SkeletonProps {
  count?: number;
  wrapper?: React.FunctionComponent<PropsWithChildren<unknown>>;
  className?: string;
  containerClassName?: string;
  circle?: boolean;
  style?: CSSProperties;

  baseColor?: string;
  highlightColor?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  inline?: boolean;
  duration?: number;
  direction?: 'ltr' | 'rtl';
  enableAnimation?: boolean;
  mt?: string | number;
  ml?: string | number;
  mr?: string | number;
  mb?: string | number;
}

function Skeleton({
  count = 1,
  wrapper: Wrapper,
  className: customClassName,
  containerClassName,
  circle = false,
  style: styleProp,
  enableAnimation,
  ...originalPropsStyleOptions
}: SkeletonProps): ReactElement {
  const propsStyleOptions = { ...originalPropsStyleOptions };

  // DO NOT overwrite style options from the context if `propsStyleOptions`
  // has properties explicity set to undefined
  for (const [key, value] of Object.entries(originalPropsStyleOptions)) {
    if (typeof value === 'undefined') {
      delete propsStyleOptions[key as keyof typeof propsStyleOptions];
    }
  }

  // Props take priority over context
  const styleOptions = {
    ...propsStyleOptions,
    circle,
  };

  // `styleProp` has the least priority out of everything
  const style = {
    ...styleProp,
    ...styleOptionsToCssProperties(styleOptions),
  };

  const inline = styleOptions.inline ?? false;
  const elements: ReactElement[] = [];
  const countCeil = Math.ceil(count);

  for (let i = 0; i < countCeil; i++) {
    let thisStyle = style;

    if (countCeil > count && i === countCeil - 1) {
      // count is not an integer and we've reached the last iteration of
      // the loop, so add a "fractional" skeleton.
      //
      // For example, if count is 3.5, we've already added 3 full
      // skeletons, so now we add one more skeleton that is 0.5 times the
      // original width.

      const width = thisStyle.width ?? '100%'; // 100% is the default since that's what's in the CSS

      const fractionalPart = count % 1;

      const fractionalWidth =
        typeof width === 'number'
          ? width * fractionalPart
          : `calc(${width} * ${fractionalPart})`;

      thisStyle = { ...thisStyle, width: fractionalWidth };
    }

    const skeletonSpan = (
      <span
        className={classes('bear-skeleton', styles.skeleton)}
        style={thisStyle}
        key={i}
      >
        &zwnj;
      </span>
    );

    if (inline) {
      elements.push(skeletonSpan);
    } else {
      elements.push(
        <React.Fragment key={i}>
          {skeletonSpan}
          <br />
        </React.Fragment>
      );
    }
  }

  return (
    <span
      className={classes('bear-skeleton-container', containerClassName)}
      aria-live="polite"
      aria-busy={enableAnimation ?? defaultEnableAnimation}
    >
      {Wrapper
        ? elements.map((el, i) => <Wrapper key={i}>{el}</Wrapper>)
        : elements}
    </span>
  );
}

export default Skeleton;
