import { classes } from '@bearon/utils';
import React, { HTMLAttributes } from 'react';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
} from '../utils/styles';
import Text from '../Text';
import { ThemeColor } from '../ThemeProvider';
import Box from '../Layout/Box';
import { StyledProgress } from './Styles';

export interface ProgressProps
  extends HTMLAttributes<HTMLDivElement>,
    BearStyleProps {
  height?: string;
  progressColor?: ThemeColor;
  textColor?: ThemeColor;
  showLabel?: boolean;
  label?: string; //custom label
  progress: number; //[0 to 100]
  duration?: number; //duration until full, run it automatically
}

export function Progress({
  className,
  height = '14px',
  progressColor = 'primary',
  textColor = 'white',
  showLabel = true,
  label,
  progress,
  duration,
  ...props
}: ProgressProps) {
  const [styleProps, rest] = extractStyleProps(props);
  progress = Math.min(progress, 100);

  const styleClass = React.useMemo(() => {
    styleProps.background = styleProps.background || 'grey';
    styleProps.backgroundOpacity = styleProps.backgroundOpacity || '0.2';
    return createBearStyleClass(
      styleProps,
      {
        height,
      },
      {
        '--progress': (progress || 0) + '%',
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps), progress]);

  return (
    <StyledProgress
      className={classes(styleClass, 'bear-progress', className)}
      {...rest}
    >
      <Box
        className="bear-progress-active"
        background={progressColor}
        data-full={progress >= 100}
      >
        {showLabel ? (
          label ? (
            label
          ) : (
            <Text colour={textColor} size="xs">
              {progress}%
            </Text>
          )
        ) : (
          ''
        )}
      </Box>
    </StyledProgress>
  );
}
