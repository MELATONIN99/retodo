import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { useSetRecoilState } from 'recoil';
import authState from '../../recoil/atoms/authAtom';
import getFireBaseErrorMessage from '../../utils/authError';

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
            setAuth(auth.currentUser.email);
            alert(`로그인을 성공했습니다.`);
            navigate('/');
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage = getFireBaseErrorMessage(errorCode);
            alert(`${errorMessage}`);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <>
      <h1>로그인</h1>
      <form id="loginForm">
        <input type="text" name="userName" placeholder="Email" id="email" />
        <input type="password" name="userPassword" placeholder="Password" id="password" />
        <button onClick={onClick}>Login</button>
      </form>
    </>
  );
}
