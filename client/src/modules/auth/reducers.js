import { handle } from 'redux-pack';
import { LOGIN_USER, LOGOUT_USER, SIGNUP_USER } from './types';

const initialState = {
  isLoading: false,
  authError: null,
  authenticated: false,
  message: ''
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGOUT_USER:
      return { ...state, authenticated: false };
    case LOGIN_USER:
    case SIGNUP_USER: return handle(state, action, {
      start: s => ({ ...s, authError: null }),
      failure: s => ({ ...s, authenticated: false, authError: payload }),
      success: s => ({ ...s, authenticated: true }),
    });
    default:
      return state;
  }
};
