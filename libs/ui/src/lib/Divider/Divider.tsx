import React from 'react';
import { classes, numToMs } from '@bearon/utils';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
  parseBackgroundColorCss,
} from '../utils/styles';
import styles from './Divider.module.css';

interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BearStyleProps {
  lineWidth?: string | number;
  lineHeight?: string | number;
  collapseDelay?: number;
  collapsed?: boolean;
}
export const Divider = ({
  lineWidth,
  lineHeight,
  collapseDelay,
  collapsed,
  className,
  style,
  ...props
}: DividerProps) => {
  const [styleProps, rest] = extractStyleProps(props);

  const styleClass = React.useMemo(() => {
    styleProps.background = styleProps.background || 'grey';
    styleProps.backgroundOpacity = styleProps.backgroundOpacity || '0.5';

    return createBearStyleClass(
      styleProps,
      {},
      {
        '--line-width': lineWidth || '100%',
        '--line-height': lineHeight || '1px',
        '--collapse-delay': numToMs(collapseDelay || 0),
        '--line-color': parseBackgroundColorCss(
          styleProps.background,
          styleProps.backgroundOpacity
        ),
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps)]);

  return (
    <div
      className={classes(styles.divider, className, styleClass, 'bear-divider')}
      {...rest}
    >
      <div className={styles.line} data-collapsed={collapsed} />
    </div>
  );
};

export { DividerProps };
