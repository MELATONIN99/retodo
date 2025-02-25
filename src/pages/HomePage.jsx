import { useRecoilValue } from 'recoil';
import LogoutButton from '../components/LogoutButton/LogoutButton';
import authState from '../recoil/atoms/authAtom';
import TodoContainer from '../components/TodoContainer/TodoContainer';

export default function HomePage() {
  const userInfo = useRecoilValue(authState);
  return (
    <main>
      <h1>홈페이지</h1>
      <div>{`${userInfo.displayName}`}</div>
      <LogoutButton />
      <section>
        <TodoContainer />
      </section>
    </main>
  );
}
