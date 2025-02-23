import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    signOut(auth)
      .then(() => {
        navigate('/authpage');
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <>
      <button onClick={onLogOutClick}>로그아웃</button>
    </>
  );
}
