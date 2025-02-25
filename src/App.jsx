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

function App() {
  const isDark = useRecoilValue(isDarkState);
  const [authtest, setAuth] = useRecoilState(authState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setAuth(user);
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
  }, [setAuth, setIsLoggedIn, isLoggedIn, authtest, isLoading]);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        {isLoading ? <p>Loading..</p> : <Router />}
      </ThemeProvider>
    </>
  );
}

export default App;
