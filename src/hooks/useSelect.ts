import { useState } from 'react';
import { SelectOption } from '../components/CustomSelect/CustomSelect';
import { options } from '../components/Form/Form';

export const useSelect = () => {
  const [value, setValue] = useState(options[0]);

  const onChange = (e: SelectOption | null) => {
    if (e) {
      setValue(e);
    }
  };
  return { value, onChange };
};
