import React, { HTMLAttributes, cloneElement } from 'react';
import {
  CommonStyleProps,
  getDefaultClassName,
  parseProps,
} from '../utils/styles';
import { ThemeColor } from '../ThemeProvider';
import { StyledAvatarGroup } from './Styles';
import Avatar from './Avatar';
import { classes } from '../utils';

export interface AvatarGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    CommonStyleProps {
  children?: React.ReactNode | React.ReactNode[];
  max?: number;
  borderColor?: string;
  badgeColor?: ThemeColor;
}

export default function AvatarGroup({
  children,
  className,
  max = 3,
  borderColor = 'white',
  badgeColor = 'primary',
  ...props
}: AvatarGroupProps) {
  const maxLeft = Math.max(
    ((children as React.ReactNode[])?.length || 0) - max,
    0
  );

  const childrenWithinMax = (children as React.ReactNode[]).slice(0, max);
  const reversedChildren = childrenWithinMax.reverse();

  const clones = reversedChildren.map((child, index) => {
    return cloneElement(child as React.ReactElement, {
      className: getDefaultClassName('avatarGroup-avatarItem'),
      key: index,
    });
  });

  return (
    <StyledAvatarGroup
      className={classes(className, getDefaultClassName('avatarGroup'))}
      role="group"
      $borderColor={borderColor}
      {...parseProps(props)}
    >
      {!!maxLeft && (
        <Avatar
          abbreviation={`+${maxLeft}`}
          background={badgeColor}
          backgroundOpacity={0.5}
          className={getDefaultClassName('avatarGroup-avatarItem')}
        />
      )}
      {clones}
    </StyledAvatarGroup>
  );
}
