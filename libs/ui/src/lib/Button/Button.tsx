import React from 'react';
import { classes } from '@bearon/utils';
import { BearStyleProps, createBearStyleClass } from '../utils/styles';
import Loader, { LoaderProps } from '../Loader/Loader';
import Text, { TextVariant } from '../Text';
import { ThemeColor } from '../ThemeProvider/theme';
import styles from './styles.module.scss';

export type ButtonVariant =
  | 'text'
  | 'outlined'
  | 'contained'
  | 'outlined-secondary';

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    BearStyleProps {
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
  loaderProps?: LoaderProps; //when loading
  disableRippleEffect?: boolean;
  clip?: boolean;
}

function Button({
  background = 'primary',
  borderColor = 'primary',
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
  clip,
  sx,
  sxS,
  sxM,
  sxL,
  ...props
}: ButtonProps) {
  const [coords, setCoords] = React.useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = React.useState(false);

  //handle style
  const styleClass = React.useMemo(() => {
    let finalBg = `var(--${background})`;
    let finalTextColor = `var(--${textColor})`;
    let finalBorderColor = `var(--${borderColor})`;

    if (variant !== 'contained' && background === 'primary') {
      finalBg = `transparent`;
      finalBorderColor = 'transparent';
    }

    if (textColor === 'white') {
      if (variant === 'text' || variant === 'outlined') {
        finalTextColor = `var(--primary)`;
      }
      if (variant === 'outlined-secondary') {
        finalTextColor = `var(--textLight)`;
      }
    }

    if (borderColor === 'primary') {
      if (variant === 'text') {
        finalBorderColor = 'transparent';
      } else if (variant === 'outlined-secondary') {
        finalBorderColor = `var(--textLight)`;
      } else if (variant === 'outlined') {
        finalBorderColor = `var(--primary)`;
      }
    }

    return createBearStyleClass(
      {
        sx,
        sxS,
        sxM,
        sxL,
      },
      {
        background: clip ? 'transparent' : finalBg,
        color: finalTextColor,
        borderColor: finalBorderColor,
        borderWidth:
          variant === 'outlined' || variant === 'outlined-secondary'
            ? '1px'
            : 0,
      },
      {
        '--btn-background': finalBg,
      }
    );
  }, [sx, sxS, sxM, sxL, background, textColor, variant, borderColor, clip]);

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
    <button
      className={classes(className, styles.button, 'bear-btn', styleClass)}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
      }}
      data-size={textVariant}
      data-variant={variant}
      {...props}
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
          className={styles.ripple}
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      )}
    </button>
  );
}

export default Button;
