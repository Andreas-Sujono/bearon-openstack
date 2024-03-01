import React, { HTMLAttributes } from 'react';
import { CloseIcon } from '../Icon';
import { Text, TextVariant } from '../Text';
import { ThemeColor } from '../ThemeProvider';
import { Button } from '../Button/Button';
import Transition from '../Animation/Transition';
import { StyledBanner } from './Styles';
import {
  CommonStyleProps,
  classes,
  getDefaultClassName,
  parseProps,
} from '../utils';

export interface BannerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    CommonStyleProps {
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
  background = 'primary',
  ...props
}: BannerProps) {
  const [showed, setShowed] = React.useState(true);

  return (
    <Transition in={showed} unmount timeout={400}>
      {(visible, status) => (
        <StyledBanner
          className={classes(className, getDefaultClassName('banner'))}
          $size={size}
          data-status={status}
          $background={background}
          {...parseProps(props)}
        >
          {icon}
          <Text size={size} colour={textColor}>
            {text}
          </Text>
          {dismissable && (
            <Button
              icon={<CloseIcon color={textColor || 'white'} size="1rem" />}
              variant="text"
              className={getDefaultClassName('banner-closeBtn')}
              textColor="white"
              onClick={() => setShowed(false)}
            ></Button>
          )}
        </StyledBanner>
      )}
    </Transition>
  );
}
