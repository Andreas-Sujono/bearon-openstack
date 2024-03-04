import { classes } from '@bearon/utils';
import React, { HTMLAttributes } from 'react';
import { CloseIcon } from '@bearon/icon';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
} from '../utils/styles';
import Text, { TextVariant } from '../Text';
import { ThemeColor } from '../ThemeProvider';
import { Button } from '../Button/Button';
import Transition from '../Animation/Transition';
import { StyledBanner } from './Styles';

export interface BannerProps
  extends HTMLAttributes<HTMLDivElement>,
    BearStyleProps {
  size?: TextVariant;
  icon?: React.ReactElement;
  text?: string;
  textColor?: ThemeColor;
  dismissable?: boolean;
}

export default function Banner({
  className,
  size = 'sm',
  icon,
  text,
  textColor,
  dismissable,
  ...props
}: BannerProps) {
  const [showed, setShowed] = React.useState(true);

  const [styleProps, rest] = extractStyleProps(props);

  const styleClass = React.useMemo(() => {
    styleProps.background = styleProps.background || 'primary';
    return createBearStyleClass(styleProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps)]);

  return (
    <Transition in={showed} unmount timeout={400}>
      {(visible, status) => (
        <StyledBanner
          className={classes(styleClass, 'bear-banner', className)}
          $size={size}
          data-status={status}
          {...rest}
        >
          {icon}
          <Text size={size} colour={textColor}>
            {text}
          </Text>
          {dismissable && (
            <Button
              icon={<CloseIcon color={textColor || 'white'} size="1rem" />}
              variant="text"
              className="bear-banner-close-btn"
              textColor="white"
              onClick={() => setShowed(false)}
            ></Button>
          )}
        </StyledBanner>
      )}
    </Transition>
  );
}
