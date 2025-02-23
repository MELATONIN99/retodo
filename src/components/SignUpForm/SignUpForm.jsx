import { useNavigate } from 'react-router-dom';
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import getFireBaseErrorMessage from '../../utils/authError';

export default function SignUpForm() {
  const navigate = useNavigate();

  const onClick = event => {
    event.preventDefault();
    const displayName = document.getElementById('displayName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        createUserWithEmailAndPassword(auth, email, password, displayName)
          .then(() => {
            updateProfile(auth.currentUser, {
              displayName: displayName,
            }).then(() => {
              alert(`가입을 환영합니다 ${displayName}`);
              navigate('/');
            });
          })
          .catch(error => {
            const errorMessage = getFireBaseErrorMessage(error.code);
            alert(`${errorMessage}`);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <>
      <h1>회원가입</h1>
      <form id="signUpForm">
        <input type="text" name="userDisplayName" placeholder="Name" id="displayName" />
        <input type="text" name="userName" placeholder="Email" id="email" />
        <input type="password" name="userPassword" placeholder="Password" id="password" />
        <button onClick={onClick}>Sign Up</button>
      </form>
    </>
  );
}
