import { StylesConfig } from 'react-select';
import { SelectOption } from './CustomSelect';

export const selectStyles: StylesConfig<SelectOption> = {
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: 'rgba(117, 108, 108, 1)',
    textAlign: 'center',
  }),
  control: (base, state) => ({
    ...base,
    padding: 15,
    borderRadius: 30,
    borderColor: state.isFocused ? 'rgba(117, 108, 108, 1)' : 'transparent',
    boxShadow: 'transparent',
    fontSize: 18,
  }),
  valueContainer: (base) => ({
    ...base,
    textAlign: 'center',
    borderColor: 'transparent',
  }),
  menu: (base) => ({
    ...base,
    textAlign: 'center',
    borderRadius: 30,
  }),
  menuList: (base, state) => ({
    ...base,
    borderColor: state.focusedOption ? 'rgba(117, 108, 108, 1)' : 'transparent',
    borderRadius: 30,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? 'rgba(117, 108, 108, 1)'
      : state.isFocused
      ? 'rgba(117, 108, 108, 0.3)'
      : 'transparent',
    ':active': {
      ...base[':active'],
      backgroundColor: state.isDisabled
        ? state.isSelected
          ? 'rgba(117, 108, 108, 0.3)'
          : 'transparent'
        : 'rgba(117, 108, 108, 0.3)',
    },
  }),
};
