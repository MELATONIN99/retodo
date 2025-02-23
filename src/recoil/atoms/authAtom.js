import { atom } from 'recoil';

const authState = atom({
  key: 'authState',
  default: null,
  // TypeError: Cannot freeze 방지
  dangerouslyAllowMutability: true,
});

export default authState;
