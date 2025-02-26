import { useState } from 'react';
import SignUpForm from '../components/SignUpForm/SignUpForm';
import LoginForm from '../components/LoginForm/LoginForm';
import Navigation from '../components/shared/Navigation/Navigation';
import * as S from '../styles/AuthPageStyles';

export default function AuthPage() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const onClickLogin = () => {
    setIsLoginForm(true);
  };

  const onClickSignUp = () => {
    setIsLoginForm(false);
  };

  return (
    <S.AuthPageLayout>
      <Navigation />
      <S.AuthPageTitle>ReToDo</S.AuthPageTitle>
      <S.AuthBox>
        <S.AuthSelectBox isEnabled={isLoginForm} setIsEnabled={setIsLoginForm}>
          <S.AuthLoginBox $isEnabled={isLoginForm} onClick={onClickLogin}>
            로그인
          </S.AuthLoginBox>
          <S.AuthSignUpBox $isEnabled={isLoginForm} onClick={onClickSignUp}>
            회원가입
          </S.AuthSignUpBox>
        </S.AuthSelectBox>
        {isLoginForm ? <LoginForm /> : <SignUpForm />}
      </S.AuthBox>
    </S.AuthPageLayout>
  );
}
