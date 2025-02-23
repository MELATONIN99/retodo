import { useRecoilValue } from 'recoil';
import isLoggedInState from '../recoil/selectors/authSelector';
import LogoutButton from '../components/LogoutButton/LogoutButton';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function HomePage() {
  const navigate = useNavigate();
  const isLogged = useRecoilValue(isLoggedInState);

  useEffect(() => {
    if (isLogged === false) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/authpage');
    }
  }, [isLogged, navigate]);

  return (
    <>
      <h1>홈페이지</h1>
      <div>{`${isLogged}`}</div>
      <LogoutButton />
    </>
  );
}
