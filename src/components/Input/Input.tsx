import { HTMLInputTypeAttribute } from 'react';
import { StyledInput } from './styles';

export interface InputHooks {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface InputProps {
  placeholder: string;
  hook: InputHooks;
  type: HTMLInputTypeAttribute;
}

export const Input = ({ placeholder, hook, type }: InputProps) => {
  return <StyledInput placeholder={placeholder} {...hook} type={type} />;
};
