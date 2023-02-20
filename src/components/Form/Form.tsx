import React, { useEffect, useState } from 'react';
import { InputGroup, StyledForm, Subtitle, Title, Total } from './styles';
import { useInput } from '../../hooks/useInput';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { CustomSelect, SelectOption } from '../CustomSelect/CustomSelect';
import { useSelect } from '../../hooks/useSelect';

export const options: SelectOption[] = [
  { value: '10', label: '10%' },
  { value: '15', label: '15%' },
  { value: '20', label: '20%' },
];
export const Form = () => {
  const bill = useInput();
  const persons = useInput();
  const tips = useSelect();

  const [total, getTotal] = useState('0.00');
  const [disabled, setDisabled] = useState(false);

  const countTotal = (): void => {
    let value = (
      (Number(bill.value) * (1 + Number(tips.value.value) / 100)) /
      Number(persons.value)
    ).toFixed(2);
    return getTotal(value);
  };

  useEffect(() => {
    bill.value && persons.value && bill.value !== '0' && persons.value !== '0'
      ? setDisabled(false)
      : setDisabled(true);
  }, [bill.value, persons.value]);

  return (
    <StyledForm>
      <Title>Welcome to App</Title>
      <Subtitle>Let's go calculate your tips</Subtitle>
      <InputGroup>
        <Input placeholder='Enter bill' hook={{ ...bill }} type='number' />
        <Input
          placeholder='Enter persons'
          hook={{ ...persons }}
          type='number'
        />
        <CustomSelect options={options} hook={{ ...tips }} />
      </InputGroup>
      <Total>Total: {total} $</Total>

      <Button onClick={countTotal} type='button' isDisabled={disabled} />
    </StyledForm>
  );
};
