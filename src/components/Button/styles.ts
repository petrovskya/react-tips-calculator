import styled from 'styled-components';

const StyledButton = styled.button<{ disabled: boolean }>`
  color: #eaf2f2;
  background-color: ${(props) =>
    props.disabled ? 'rgba(46, 210, 201, 0.4)' : '#2ed2c9'};
  border: none;
  padding: 13px;
  font-family: inherit;
  font-size: 24px;
`;
export { StyledButton };
