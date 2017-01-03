import { store } from '../redux/store';

export const getTokenFromRedux = () => {
  const { token } = store.getState().auth;
  return token;
};
