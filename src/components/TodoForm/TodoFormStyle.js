import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const TodoInput = styled.input`
  padding: 1rem;
  background-color: ${({ theme }) => theme.bgColor200};
  width: 100%;
  height: 4rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.bgColor200};
  border-radius: 1rem;

  &:focus {
    outline: 2px solid;
    outline-color: ${({ theme }) => theme.masterColor};
  }
`;

export const ControlBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;
export const FavoriteLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

export const FavoriteInput = styled.input`
  width: 1.6rem;
  height: 1.6rem;
`;

export const SubmitButton = styled.button`
  border-radius: 0.6rem;
  height: 100%;
  background-color: ${({ theme }) => theme.rgbaLight};
  font-size: 1.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.masterColor};
  }
`;
