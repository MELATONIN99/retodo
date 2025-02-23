import { useState } from 'react';
import SignUpForm from '../components/SignUpForm/SignUpForm';
import ToggleSwitch from './../components/shared/ToggleSwitch/ToggleSwitch';
import LoginForm from '../components/LoginForm/LoginForm';
import { useRecoilState } from 'recoil';
import { isDarkState } from '../recoil/atoms/themeAtom';

export default function AuthPage() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isDark, setIsDark] = useRecoilState(isDarkState);

  return (
    <>
      <h1>AuthPage</h1>
      <ToggleSwitch isEnabled={isLoginForm} setIsEnabled={setIsLoginForm} />
      {isLoginForm ? <LoginForm /> : <SignUpForm />}
      <ToggleSwitch isEnabled={isDark} setIsEnabled={setIsDark} />
    </>
  );
}
