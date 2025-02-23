import { selector } from 'recoil';
import authState from '../atoms/authAtom';

const isLoggedInState = selector({
  key: 'isLoggedInState',
  get: ({ get }) => {
    const auth = get(authState);
    return auth !== null;
  },
});

export default isLoggedInState;
