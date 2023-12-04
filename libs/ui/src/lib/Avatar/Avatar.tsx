import { classes } from '@bearon/utils';
import React, { HTMLAttributes } from 'react';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
} from '../utils/styles';
import Text, { TextVariant } from '../Text';
import { StyledAvatar } from './Styles';

interface Props extends HTMLAttributes<HTMLDivElement>, BearStyleProps {
  children?: React.ReactNode;
  name?: string;
  size?: TextVariant;
  icon?: React.ReactElement;
  withNotif?: boolean;
  abbreviation?: string;
}

export default function Avatar({
  children,
  className,
  name,
  size,
  icon,
  withNotif,
  abbreviation,
  ...props
}: Props) {
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
        <Text size={size}>{abbreviation || name?.charAt(0) || ''}</Text>
      )}
    </StyledAvatar>
  );
}
