import React from 'react';
import styled from 'styled-components';
import { Form } from './components/Form/Form';

export const App = () => {
  return (
    <StyledApp>
      <Form />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  background: url("data:image/svg+xml,%3Csvg width='250' height='250' viewBox='0 0 250 250' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Ccircle cx='125' cy='17' r='125' fill='%2385D3CA' fill-opacity='0.31'/%3E %3C/svg%3E ")
      no-repeat,
    url("data:image/svg+xml,%3Csvg width='250' height='250' viewBox='0 0 250 250' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Ccircle cx='36' cy='70' r='125' fill='%2385D3CA' fill-opacity='0.31'/%3E %3C/svg%3E ")
      no-repeat,
    rgba(234, 242, 242, 1);
  background-size: 250px 250px;
  font-family: 'Lato', 'san-serif';
`;
