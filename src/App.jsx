import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './recoil/atoms/themeAtom';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
