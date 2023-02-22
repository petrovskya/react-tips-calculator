import React from 'react';
import { StyledButton } from './styles';

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  isDisabled: boolean;
}
export const Button = ({ type, isDisabled }: ButtonProps) => {
  return (
    <StyledButton type={type} disabled={isDisabled}>
      Ohhhoooo🍻
    </StyledButton>
  );
};
