import React, { useState } from 'react';
import styled from 'styled-components';
import {
  CommonStyleProps,
  classes,
  getDefaultClassName,
  parseCommonProps,
  parseProps,
} from '../utils';

const BAD_SRCS: { [tokenAddress: string]: true } = {
  '': true,
  null: true,
  undefined: true,
};

export interface ImageProps
  extends Omit<React.HTMLProps<HTMLImageElement>, 'as' | 'color'>,
    CommonStyleProps {
  srcs?: string[];
  src?: string;
  as?: React.ElementType;
}

export function Image({
  srcs,
  alt,
  style,
  as = 'img',
  src,
  className,
  ...props
}: ImageProps) {
  const [, refresh] = useState<number>(0);

  const finalSrc: string | undefined =
    srcs?.find((src) => !BAD_SRCS[src]) || src;

  if (finalSrc) {
    return (
      <StyledImage
        {...parseProps(props)}
        as={as}
        alt={alt}
        src={finalSrc}
        onError={() => {
          if (src) BAD_SRCS[src] = true;
          refresh((i) => i + 1);
        }}
        style={style}
        className={classes(className, getDefaultClassName('image'))}
      />
    );
  }

  return (
    <StyledImage
      {...parseProps(props)}
      as={as}
      src={finalSrc}
      alt={alt}
      style={style}
      className={classes(className, getDefaultClassName('image'))}
    />
  );
}

const StyledImage = styled.img`
  ${(props) => parseCommonProps(props)}
`;
