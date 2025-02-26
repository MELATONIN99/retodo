import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isDarkState } from './recoil/atoms/themeAtom';
import { darkTheme, lightTheme } from './styles/theme';
import Router from './router/Router';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import authState, { isLoggedInState } from './recoil/atoms/authAtom';
import { auth } from './firebase/firebase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const isDark = useRecoilValue(isDarkState);
  const [userAuth, setUserAuth] = useRecoilState(authState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUserAuth(user);
        setIsLoggedIn(true);
        setIsLoading(false);
      } else {
        setIsLoggedIn(false);
        setIsLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [setUserAuth, setIsLoggedIn, isLoggedIn, userAuth, isLoading]);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <ToastContainer position="top-center" limit={2} closeButton={false} autoClose={2000} hideProgressBar />
        {isLoading ? <p>Loading..</p> : <Router />}
      </ThemeProvider>
    </>
  );
}

export default App;
