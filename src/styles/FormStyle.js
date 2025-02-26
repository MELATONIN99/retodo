import styled from 'styled-components';

export const FormLayout = styled.section`
  margin-top: 2rem;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 2rem;
`;

export const Input = styled.input`
  padding: 1rem;
  background-color: ${({ theme }) => theme.bgColor200};
  width: 80%;
  height: 4rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.bgColor200};
  border-radius: 1rem;

  &:focus {
    outline: 2px solid;
    outline-color: ${({ theme }) => theme.masterColor};
  }
`;

export const Button = styled.button`
  border-radius: 1rem;
  padding: 1rem;
  width: 80%;
  height: 4rem;
  background-color: ${({ theme }) => theme.rgbaMedium};
  font-size: 1.4rem;

  &:hover {
    background-color: ${({ theme }) => theme.masterColor};
  }
`;
