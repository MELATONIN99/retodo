import { useNavigate } from 'react-router-dom';
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import getFireBaseErrorMessage from '../../utils/authError';
import { useSetRecoilState } from 'recoil';
import authState from '../../recoil/atoms/authAtom';
import * as S from '../../styles/FormStyle';
import { toast } from 'react-toastify';

export default function SignUpForm() {
  const setAuth = useSetRecoilState(authState);
  const navigate = useNavigate();

  const onClick = event => {
    event.preventDefault();
    const displayName = document.getElementById('displayName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (displayName === '') {
      toast.warn('닉네임은 한 글자 이상 입력해 주세요.');
    }

    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        createUserWithEmailAndPassword(auth, email, password, displayName)
          .then(() => {
            updateProfile(auth.currentUser, {
              displayName: displayName,
            }).then(() => {
              setAuth(auth);
              toast.success(`가입을 환영합니다 ${displayName}`);
              navigate('/');
            });
          })
          .catch(error => {
            const errorMessage = getFireBaseErrorMessage(error.code);
            toast.error(`${errorMessage}`);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <S.FormLayout>
      <S.Form id="signUpForm">
        <S.Input type="text" name="userDisplayName" placeholder="닉네임" id="displayName" />
        <S.Input type="text" name="userName" placeholder="이메일" id="email" />
        <S.Input type="password" name="userPassword" placeholder="비밀번호" id="password" />
        <S.Button onClick={onClick}>회원가입</S.Button>
      </S.Form>
    </S.FormLayout>
  );
}
