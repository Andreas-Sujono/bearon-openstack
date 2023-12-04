import { classes } from '@bearon/utils';
import React, { HTMLAttributes, cloneElement } from 'react';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
} from '../utils/styles';
import { ThemeColor } from '../ThemeProvider';
import { StyledAvatarGroup } from './Styles';
import Avatar from './Avatar';

export interface AvatarGroupProps
  extends HTMLAttributes<HTMLDivElement>,
    BearStyleProps {
  children?: React.ReactNode | React.ReactNode[];
  max?: number;
  borderColor?: string;
  badgeColor?: ThemeColor;
}

export default function AvatarGroup({
  children,
  className,
  max = 3,
  borderColor,
  badgeColor = 'primary',
  ...props
}: AvatarGroupProps) {
  const [styleProps, rest] = extractStyleProps(props);

  const styleClass = React.useMemo(() => {
    return createBearStyleClass(styleProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps)]);

  const maxLeft = Math.max(
    ((children as React.ReactNode[])?.length || 0) - max,
    0
  );

  const childrenWithinMax = (children as React.ReactNode[]).slice(0, max);
  const reversedChildren = childrenWithinMax.reverse();

  const clones = reversedChildren.map((child, index) => {
    return cloneElement(child as React.ReactElement, {
      className: 'bear-avatar-item',
      key: index,
    });
  });

  return (
    <StyledAvatarGroup
      className={classes(styleClass, 'bear-avatar', className)}
      role="group"
      $borderColor={borderColor}
      {...rest}
    >
      {!!maxLeft && (
        <Avatar
          abbreviation={`+${maxLeft}`}
          background={badgeColor}
          backgroundOpacity={0.5}
          className="bear-avatar-item"
        />
      )}
      {clones}
    </StyledAvatarGroup>
  );
}
