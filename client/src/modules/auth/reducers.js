import { handle } from 'redux-pack';
import { CHECK_TOKEN, LOGIN_USER, LOGOUT_USER, SIGNUP_USER } from './types';

const initialState = {
  error: false,
  isLoading: false,
  message: null,
  user: null,
  token: null
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case CHECK_TOKEN:
    return handle(state, action, {
      start: s => ({ ...s, isLoading: true }),
      finish: s => ({ ...s, isLoading: false }),
      failure: s => ({ ...s, initialState }),
      success: s => ({ ...s, token: payload.token, user: payload.user }),
    });
    case LOGIN_USER:
    case SIGNUP_USER:
    return handle(state, action, {
      start: s => ({ ...s, isLoading: true }),
      finish: s => ({ ...s, isLoading: false }),
      failure: s => ({ ...s, error: true, message: payload.message }),
      success: s => ({
        ...s,
        message: payload.message,
        token: payload.token,
        user: payload.user
      }),
    });
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};
