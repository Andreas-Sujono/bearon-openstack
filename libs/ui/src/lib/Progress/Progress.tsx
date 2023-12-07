import { classes } from '@bearon/utils';
import React, { HTMLAttributes } from 'react';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
} from '../utils/styles';
import { TextVariant } from '../Text';
import { ThemeColor } from '../ThemeProvider';
import { StyledProgress } from './Styles';

export interface ProgressProps
  extends HTMLAttributes<HTMLDivElement>,
    BearStyleProps {
  size?: TextVariant;
  progressColor?: ThemeColor;
  showedLabel?: boolean;
  label?: string; //custom label
  progress?: number; //[0 to 100]
  duration?: number; //duration until full, run it automatically
}

export function Progress({
  className,
  size = 'sm',
  progressColor,
  showedLabel,
  label,
  progress,
  duration,
  ...props
}: ProgressProps) {
  const [styleProps, rest] = extractStyleProps(props);

  const styleClass = React.useMemo(() => {
    styleProps.background = undefined;
    return createBearStyleClass(styleProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps)]);

  return (
    <StyledProgress
      className={classes(styleClass, 'bear-progress', className)}
      $size={size}
      {...rest}
    >
      <div />
    </StyledProgress>
  );
}
