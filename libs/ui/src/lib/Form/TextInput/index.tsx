import React, { useId } from 'react';
import { StyledInput, StyledLabel } from './Styles';
import { CommonStyleProps } from '../../utils';

export const Label = ({
  children,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLLabelElement>) => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};

interface TextInputProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'color'>,
    CommonStyleProps {
  label?: string;
  labelShrink?: boolean;
}

export const TextInput = ({ label, labelShrink }: TextInputProps) => {
  const id = useId();
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput id={id} />
    </>
  );
};
