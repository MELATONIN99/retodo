import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AuthPage from '../pages/AuthPage';
import { useRecoilValue } from 'recoil';
import { isLoggedInState } from '../recoil/atoms/authAtom';

export default function Router() {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={isLoggedIn ? <HomePage /> : <Navigate replace to="/authpage" />} />
        <Route path="/authpage" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}
