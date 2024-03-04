import React, { HTMLAttributes } from 'react';
import { Text, TextVariant } from '../Text';
import { ThemeColor } from '../ThemeProvider';
import { StyledAvatar } from './Styles';
import {
  CommonStyleProps,
  classes,
  getDefaultClassName,
  parseProps,
} from '../utils';

export interface AvatarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    CommonStyleProps {
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
  background = 'primary',
  ...props
}: AvatarProps) {
  return (
    <StyledAvatar
      className={classes(className, getDefaultClassName('avatar'))}
      $size={size}
      $background={background}
      $withNotif={withNotif}
      {...parseProps(props)}
    >
      {children || (
        <Text size={size} colour={textColor}>
          {abbreviation || name?.charAt(0) || ''}
        </Text>
      )}
      <span />
    </StyledAvatar>
  );
}
