import React from 'react';
import Select from 'react-select';
import { selectStyles } from './styles';

export interface SelectOption {
  value: string;
  label: string;
}
export interface SelectProps {
  options: SelectOption[];
  hook: SelectHooks;
}
interface SelectHooks {
  value: SelectOption;
  onChange: (event: SelectOption | null) => void;
}
export const CustomSelect = ({ options, hook }: SelectProps) => {
  return (
    <Select options={options} {...hook} styles={selectStyles} isMulti={false} />
  );
};
