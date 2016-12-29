import { handle } from 'redux-pack';
import { SIGNUP_USER } from './types';

const initialState = {
  isLoading: false,
  authError: null,
  authenticated: false,
  message: ''
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_USER: return handle(state, action, {
      start: s => ({ ...s, authError: null }),
      failure: s => ({ ...s, authenticated: false, authError: payload }),
      success: s => ({ ...s, authenticated: true }),
    });
    default:
      return state;
  }
};
