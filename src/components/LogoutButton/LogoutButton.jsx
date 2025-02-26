import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '../../assets/LogoutIcon';
import * as S from './LogoutButtonStyle';
import { useResetRecoilState } from 'recoil';
import authState from '../../recoil/atoms/authAtom';
import { toast } from 'react-toastify';

export default function LogoutButton() {
  const navigate = useNavigate();
  const resetAuth = useResetRecoilState(authState);

  const onLogOutClick = () => {
    signOut(auth)
      .then(() => {
        navigate('/authpage');
        resetAuth();
        toast.success('로그아웃 성공');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <S.IconButton name="LogoutButton" onClick={onLogOutClick}>
      <LogoutIcon />
    </S.IconButton>
  );
}
