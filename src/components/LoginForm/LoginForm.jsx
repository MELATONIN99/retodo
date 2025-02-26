import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { useSetRecoilState } from 'recoil';
import authState from '../../recoil/atoms/authAtom';
import getFireBaseErrorMessage from '../../utils/authError';
import * as S from '../../styles/FormStyle';
import { toast } from 'react-toastify';

export default function LoginForm() {
  const setAuth = useSetRecoilState(authState);
  const navigate = useNavigate();

  const onClick = event => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            setAuth(auth);
            toast.success(`로그인 성공`);
            navigate('/');
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage = getFireBaseErrorMessage(errorCode);
            toast.error(`${errorMessage}`);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <S.FormLayout>
      <S.Form id="loginForm">
        <S.Input type="text" name="userName" placeholder="이메일" id="email" />
        <S.Input type="password" name="userPassword" placeholder="비밀번호" id="password" />
        <S.Button onClick={onClick}>로그인</S.Button>
      </S.Form>
    </S.FormLayout>
  );
}
