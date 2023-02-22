import React from 'react';
import Select, {
  components,
  DropdownIndicatorProps,
  SingleValue,
} from 'react-select';
import { selectStyles } from './styles';
import { ReactComponent as DropDownIcon } from '../../assets/img/dropdown-indicator.svg';

const DropdownIndicator = (
  props: DropdownIndicatorProps<TipsOption, false>
) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropDownIcon />
    </components.DropdownIndicator>
  );
};
export interface TipsOption {
  value: number;
  label: string;
}
export interface SelectProps {
  options: TipsOption[];
  hook: SelectHooks;
}
interface SelectHooks {
  value: TipsOption;
  onChange: (event: SingleValue<TipsOption>) => void;
}
export const CustomSelect = ({ options, hook }: SelectProps) => {
  return (
    <Select
      components={{ DropdownIndicator }}
      options={options}
      {...hook}
      styles={selectStyles}
      isMulti={false}
      isSearchable={false}
    />
  );
};
