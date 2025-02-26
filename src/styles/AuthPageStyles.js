import styled from 'styled-components';

export const AuthPageLayout = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  text-align: center;
`;

export const AuthPageTitle = styled.h1`
  font-size: 2rem;
`;

export const AuthBox = styled.div`
  margin-top: 1rem;
  border: 2px solid;
  border-color: ${({ theme }) => theme.rgbaLight};
  min-height: 34rem;
  width: 100%;
  min-width: 340px;
  max-width: 500px;
  background-color: ${({ theme }) => theme.bgColor};
`;

export const AuthSelectBox = styled.div`
  display: flex;
  height: 3rem;
  width: 100%;
  align-items: center;
`;

export const AuthLoginBox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.rgbaBold};
  cursor: pointer;
  background-color: ${({ $isEnabled, theme }) => ($isEnabled ? theme.masterColor : theme.rgbaLight)};
`;
export const AuthSignUpBox = styled(AuthLoginBox)`
  background-color: ${({ $isEnabled, theme }) => ($isEnabled ? theme.rgbaLight : theme.masterColor)};
`;
