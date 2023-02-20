import styled from 'styled-components';

const StyledForm = styled.form`
  display: grid;
  grid-gap: 45px;
  width: 100%;
  max-width: 500px;
  padding: 40px;
`;
const InputGroup = styled.div`
  display: grid;
  grid-gap: 15px;
`;
const Title = styled.h2`
  display: grid;
  justify-self: center;
  font-size: 40px;
  font-weight: 400;
  color: #2b2929;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
const Subtitle = styled.h6`
  display: grid;
  justify-self: center;
  font-size: 32px;
  font-weight: 300;
  color: #756c6c;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Total = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #2b2929;
`;
export { StyledForm, InputGroup, Title, Subtitle, Total };
