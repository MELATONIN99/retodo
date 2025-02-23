import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { useRecoilValue } from 'recoil';
import { isDarkState } from './recoil/atoms/themeAtom';
import { darkTheme, lightTheme } from './styles/theme';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';

function App() {
  const isDark = useRecoilValue(isDarkState);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <BrowserRouter basename="/">
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
