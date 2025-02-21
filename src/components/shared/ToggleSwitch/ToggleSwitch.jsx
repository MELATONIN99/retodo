import { ToggleWrap, Toggle, ToggleButton } from './ToggleSwitchStyle';

export default function ToggleSwitch({ isEnabled, setIsEnabled }) {
  return (
    <ToggleWrap onClick={() => setIsEnabled(prev => !prev)}>
      <Toggle isToggleOn={isEnabled}>
        <ToggleButton isToggleOn={isEnabled}></ToggleButton>
      </Toggle>
    </ToggleWrap>
  );
}
