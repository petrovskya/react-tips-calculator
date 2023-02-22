import React, { FormEvent, useEffect, useState } from 'react';
import { InputGroup, StyledForm, Subtitle, Title, Total } from './styles';
import { useInput } from '../../hooks/useInput';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { CustomSelect, TipsOption } from '../CustomSelect/CustomSelect';
import { useSelect } from '../../hooks/useSelect';

export const options: TipsOption[] = [
  { value: 10, label: '10%' },
  { value: 15, label: '15%' },
  { value: 20, label: '20%' },
];
export const Form = () => {
  const bill = useInput();
  const persons = useInput();
  const tips = useSelect();
  const [total, setTotal] = useState(0);
  const [isDisabled, setDisabled] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let total =
      (Number(bill.value) * (1 + Number(tips.value.value) / 100)) /
      Number(persons.value);
    setTotal(total);
  };

  // const isInputEmpty = () => {
  //   if (
  //     !bill.value ||
  //     !persons.value ||
  //     bill.value === '0' ||
  //     persons.value === '0'
  //   ) {
  //     return true;
  //   }
  //   if (
  //     bill.value &&
  //     persons.value &&
  //     bill.value !== '0' &&
  //     persons.value !== '0'
  //   ) {
  //     return false;
  //   }
  // };

  // useEffect(() => {
  //   isInputEmpty() ? setDisabled(true) : setDisabled(false);
  //   if (isInputEmpty()) {
  //     return setTotal(0);
  //   }
  // }, [isInputEmpty]);

  useEffect(() => {
    !bill.value || !persons.value || bill.value === '0' || persons.value === '0'
      ? setDisabled(true)
      : setDisabled(false);
    if (
      bill.value &&
      persons.value &&
      bill.value !== '0' &&
      persons.value !== '0'
    ) {
      return setTotal(0);
    }
  }, [bill.value, persons.value]);

  return (
    <StyledForm onSubmit={handleSubmit}>
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
      <Total>Total: {total.toFixed(2)} $</Total>
      <Button type='submit' isDisabled={isDisabled} />
    </StyledForm>
  );
};
