import React from 'react';
import { classes, cssProps, numToMs } from '@bearon/utils';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
  parseBackgroundColorCss,
} from '../utils/styles';
import styles from './Divider.module.css';

export interface NotchDividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BearStyleProps {
  lineWidth?: string | number;
  lineHeight?: string | number;
  notchWidth?: string | number;
  notchHeight?: string | number;
  collapseDelay?: number;
  collapsed?: boolean;
}
export const NotchDivider = ({
  lineWidth,
  lineHeight,
  notchWidth,
  notchHeight,
  collapseDelay,
  collapsed,
  className,
  style,
  ...props
}: NotchDividerProps) => {
  const [styleProps, rest] = extractStyleProps(props);

  const styleClass = React.useMemo(() => {
    styleProps.background = styleProps.background || 'primary';
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
        '--notch-width': notchWidth || '90px',
        '--notch-height': notchHeight || '10px',
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps)]);

  return (
    <div
      className={classes(
        styles.divider,
        className,
        styleClass,
        'bear-notch-divider'
      )}
      {...rest}
    >
      <div className={styles.line} data-collapsed={collapsed} />
      <div
        className={styles.notch}
        data-collapsed={collapsed}
        style={cssProps({ collapseDelay: numToMs((collapseDelay || 0) + 160) })}
      />
    </div>
  );
};
