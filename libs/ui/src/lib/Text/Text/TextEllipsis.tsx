import React, { HTMLAttributes, useRef } from 'react';
import {
  CommonStyleProps,
  classes,
  getDefaultClassName,
  parseProps,
} from '../../utils';
import { FontWeight, TextVariant } from '../types';
import { StyledText } from '../styles';
import { Tooltip } from '../../Tooltip';
import { TooltipProps } from '../../Tooltip/Tooltip';

interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    CommonStyleProps {
  size?: TextVariant;
  as?: React.ElementType;
  align?: 'initial' | 'start' | 'center';
  weight?: FontWeight;
  secondary?: boolean;
  className?: string;
  display?: 'block' | 'inline' | 'inline-block';
  ff?: string; //must be a variable name
  maxLine?: number; //if not undefined, will use webkitLineClamp
  tooltipContent?: string;
  tooltipProps?: TooltipProps;
  text: string;
}

const EllipsisText = ({
  children,
  as: Component = 'span',
  secondary,
  className,
  size,
  align,
  weight,
  display,
  ff,
  maxLine = 1,
  tooltipContent,
  tooltipProps,
  text,
  ...props
}: Props) => {
  return (
    <Tooltip
      text={text || tooltipContent}
      containerStyle={{ maxWidth: '100%', ...tooltipProps?.containerStyle }}
      {...tooltipProps}
    >
      <StyledText
        className={classes(
          className,
          getDefaultClassName('text'),
          getDefaultClassName('textEllipsis')
        )}
        data-secondary={secondary}
        as={Component}
        $align={align}
        $weight={weight}
        $display={display}
        $size={size}
        $ff={ff}
        $maxLine={maxLine}
        {...parseProps(props)}
      >
        {text}
      </StyledText>
    </Tooltip>
  );
};

const MiddleEllipsisText = ({
  children,
  as: Component = 'span',
  secondary,
  className,
  size,
  align,
  weight,
  display,
  ff,
  maxLine = 1,
  tooltipContent,
  tooltipProps,
  text,
  offset,
  sx,
  ...props
}: Props & { offset?: string }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <Tooltip
      text={text || tooltipContent}
      containerStyle={{
        maxWidth: '100%',
        display: 'flex',
        ...tooltipProps?.containerStyle,
      }}
      {...tooltipProps}
    >
      <StyledText
        className={classes(
          className,
          getDefaultClassName('text'),
          getDefaultClassName('textEllipsis')
        )}
        data-secondary={secondary}
        as={Component}
        $align={align}
        $weight={weight}
        $display={display}
        $size={size}
        $ff={ff}
        ref={containerRef}
        {...parseProps(props)}
        $sx={{
          maxWidth: '50%',
          overflowWrap: 'break-word',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          ...sx,
        }}
      >
        {text}
      </StyledText>
      <StyledText
        className={classes(
          className,
          getDefaultClassName('text'),
          getDefaultClassName('textEllipsis')
        )}
        data-secondary={secondary}
        as={Component}
        $align={align}
        $weight={weight}
        $display={display}
        $size={size}
        $ff={ff}
        ref={containerRef}
        {...parseProps(props)}
        $sx={{
          maxWidth: '50%',
          overflowWrap: 'break-word',
          direction: 'rtl',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          position: 'relative',
          left: offset || '-10px',
          ...sx,
        }}
      >
        {text}
      </StyledText>
    </Tooltip>
  );
};

export { EllipsisText, MiddleEllipsisText };
