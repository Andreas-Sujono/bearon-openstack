import React from 'react';
import Loader, { CircularLoaderProps } from '../Loader';
import { Text, TextVariant } from '../Text';
import { ThemeColor } from '../ThemeProvider/theme';
import {
  CommonStyleProps,
  classes,
  getDefaultClassName,
  parseColor,
  parseProps,
} from '../utils';
import { StyledButton } from './Styles';

export type ButtonVariant =
  | 'text'
  | 'outlined'
  | 'contained'
  | 'outlined-secondary';

export interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'color'>,
    CommonStyleProps {
  variant?: ButtonVariant;
  textVariant?: TextVariant;
  textColor?: ThemeColor;
  background?: ThemeColor; //ThemeColor | custom color
  borderColor?: ThemeColor;
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  loaderProps?: CircularLoaderProps; //when loading
  disableRippleEffect?: boolean;
  clip?: boolean;
  fullWidth?: boolean;
  textShift?: boolean; // in case text padding is not align
}

export function Button({
  background = 'primary',
  borderColor,
  variant = 'contained',
  textVariant = 'sm',
  textColor = 'white',
  icon,
  iconPosition = 'left',
  isLoading = false,
  className,
  children,
  loaderProps = {
    size: '24px',
  },
  onClick,
  disableRippleEffect,
  fullWidth,
  clip,
  textShift,
  ...props
}: ButtonProps) {
  const [coords, setCoords] = React.useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = React.useState(false);

  //handle style
  const parsedStyle = React.useMemo(() => {
    let finalBg = parseColor(background);
    let finalTextColor = parseColor(textColor);
    let finalBorderColor = borderColor
      ? parseColor(borderColor)
      : 'transparent';

    if (variant !== 'contained') {
      finalBg = `transparent`;
    }

    if (textColor === 'white') {
      if (variant === 'text' || variant === 'outlined') {
        finalTextColor = `var(--primary)`;
      }
      if (variant === 'outlined-secondary') {
        finalTextColor = `var(--textLight)`;
      }
    }

    if (!borderColor) {
      if (variant === 'text') {
        finalBorderColor = 'transparent';
      } else if (variant === 'outlined-secondary') {
        finalBorderColor = `var(--textLight)`;
      } else if (variant === 'outlined') {
        finalBorderColor = `var(--primary)`;
      }
    }

    return {
      background: finalBg,
      color: finalTextColor,
      borderColor: finalBorderColor || 'transparent',
      borderStyle: 'solid',
      borderWidth:
        variant === 'outlined' || variant === 'outlined-secondary' ? '1px' : 0,
      width: fullWidth ? '100%' : undefined,
      padding: !children
        ? '0.5em'
        : textVariant === 'xs' || textVariant === 'xxs'
        ? '0.35em 0.75em'
        : '0.5em 1em',
    };
  }, [textColor, variant, borderColor, fullWidth, background, children]);

  //end of handle style

  //handle ripple
  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  React.useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);
  //end of handle ripple

  return (
    <StyledButton
      className={classes(className, getDefaultClassName('btn'))}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
      }}
      data-size={textVariant}
      data-variant={variant}
      data-clip={clip}
      $parsedStyle={parsedStyle}
      $textShift={textShift}
      $size={textVariant}
      {...parseProps(props)}
    >
      {iconPosition === 'left' && icon}
      {isLoading && (
        <Loader {...loaderProps} size={loaderProps.size || '24px'} />
      )}
      {!!children && (
        <Text className="bt-child" size={textVariant}>
          {children}
        </Text>
      )}
      {iconPosition === 'right' && icon}

      {isRippling && !disableRippleEffect && (
        <span
          className={getDefaultClassName('btnRipple')}
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      )}
    </StyledButton>
  );
}
