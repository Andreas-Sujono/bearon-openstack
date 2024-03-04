import { classes } from '@bearon/utils';
import React, { HTMLAttributes } from 'react';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
} from '../utils/styles';
import Text, { TextVariant } from '../Text';
import { ThemeColor } from '../ThemeProvider';
import { StyledAvatar } from './Styles';

export interface AvatarProps
  extends HTMLAttributes<HTMLDivElement>,
    BearStyleProps {
  children?: React.ReactNode;
  name?: string;
  size?: TextVariant;
  withNotif?: boolean;
  abbreviation?: string;
  textColor?: ThemeColor;
}

export default function Avatar({
  children,
  className,
  name,
  size,
  withNotif,
  abbreviation,
  textColor,
  ...props
}: AvatarProps) {
  const [styleProps, rest] = extractStyleProps(props);

  const styleClass = React.useMemo(() => {
    styleProps.background = styleProps.background || 'primary';
    return createBearStyleClass(styleProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps)]);

  return (
    <StyledAvatar
      className={classes(styleClass, 'bear-avatar', className)}
      $size={size}
      $background={props.background}
      $withNotif={withNotif}
      {...rest}
    >
      {children || (
        <Text size={size} colour={textColor}>
          {abbreviation || name?.charAt(0) || ''}
        </Text>
      )}
    </StyledAvatar>
  );
}
