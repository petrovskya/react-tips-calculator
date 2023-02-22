import { useState } from 'react';
import { SingleValue } from 'react-select';
import { TipsOption } from '../components/CustomSelect/CustomSelect';
import { options } from '../components/Form/Form';

export const useSelect = () => {
  const [value, setValue] = useState<TipsOption>(options[0]);

  const onChange = (e: SingleValue<TipsOption>) => {
    if (e) {
      setValue(e);
    }
  };
  return { value, onChange };
};
