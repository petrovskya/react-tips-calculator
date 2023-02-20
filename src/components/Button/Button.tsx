import React from 'react';
import { StyledButton } from './styles';

export interface ButtonProps {
  onClick: any;
  type: 'button' | 'submit' | 'reset' | undefined;
  isDisabled: boolean;
}
export const Button = ({ onClick, type, isDisabled }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} type={type} disabled={isDisabled}>
      Ohhhoooo🍻
    </StyledButton>
  );
};
