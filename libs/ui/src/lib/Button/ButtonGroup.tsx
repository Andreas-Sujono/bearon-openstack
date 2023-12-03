import React from 'react';
import { classes } from '@bearon/utils';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
} from '../utils/styles';
import Row from '../Layout/Row';

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BearStyleProps {
  align?: 'left' | 'center' | 'right';
  spacing?: string | number;
}

function ButtonGroup({
  align = 'left',
  className,
  children,
  spacing,
  ...props
}: ButtonGroupProps) {
  const [styleProps, rest] = extractStyleProps(props);

  const styleClass = React.useMemo(() => {
    return createBearStyleClass(styleProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps)]);

  return (
    <Row
      className={classes(className, styleClass)}
      justifyContent={
        align === 'center'
          ? 'center'
          : align === 'right'
          ? 'flex-end'
          : 'flex-start'
      }
      gap={spacing}
      wrap
      {...rest}
    >
      {children}
    </Row>
  );
}

export default ButtonGroup;
