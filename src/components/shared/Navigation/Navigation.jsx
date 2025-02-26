import { useRecoilState, useRecoilValue } from 'recoil';
import authState from '../../../recoil/atoms/authAtom';
import LogoutButton from '../../LogoutButton/LogoutButton';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { isDarkState } from './../../../recoil/atoms/themeAtom';
import * as S from './NavigationStyle';

export default function Navigation() {
  const userInfo = useRecoilValue(authState);
  const [isDark, setIsDark] = useRecoilState(isDarkState);

  return (
    <S.NavigateLayout>
      {userInfo && (
        <S.UserControl>
          <S.UserNameSpan>{`${userInfo.displayName}`}</S.UserNameSpan>
          <LogoutButton />
        </S.UserControl>
      )}
      <S.ToggleSwitchBox>
        <S.ThemeEmoji>🌗</S.ThemeEmoji>
        <ToggleSwitch isEnabled={isDark} setIsEnabled={setIsDark} />
      </S.ToggleSwitchBox>
    </S.NavigateLayout>
  );
}
