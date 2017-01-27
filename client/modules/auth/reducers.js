import { handle } from 'redux-pack';
import { CHECK_TOKEN, LOGIN_USER, LOGOUT_USER, SIGNUP_USER } from './types';

const initialState = {
  error: false,
  isFetched: false,
  message: null,
  user: null,
  token: null
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case CHECK_TOKEN:
    return handle(state, action, {
      start: s => ({ ...s, isFetched: false }),
      finish: s => ({ ...s, isFetched: true }),
      failure: () => initialState, // NOTE: I believe there is a better way of doing this.
      success: s => ({
        ...s,
        token: payload.token,
        user: payload.user
      }),
    });
    case LOGIN_USER:
    case SIGNUP_USER:
    return handle(state, action, {
      start: s => ({ ...s, isFetched: false }),
      finish: s => ({ ...s, isFetched: true }),
      failure: s => ({ ...s, error: true }),
      success: s => ({
        ...s,
        token: payload.token,
        user: payload.user
      }),
    });
    case LOGOUT_USER:
      return handle(state, action, {
        start: s => ({ ...s, isFetched: false }),
        finish: s => ({ ...s, isFetched: true }),
        failure: (s) => ({
          ...s,
          error: true,
          message: 'Not Logged Out!'
        }),
        success: s => ({
          ...s,
          message: 'Logged Out!',
          token: null,
          user: null
        }),
      });
    default:
      return state;
  }
};
