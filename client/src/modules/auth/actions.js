import { CHECK_TOKEN, LOGIN_USER, LOGOUT_USER, SIGNUP_USER } from './types';
import { getTokenFromRedux } from '../../helpers';
import {
  authenticateUser,
  createAuthUser,
  unAuthUser,
  verifyToken
} from './apiMethods';

/*
  NOTE: Use onFailure() & onSuccess for rendering message to user.
*/

export const signupUser = values => {
  const { email, password } = values;
  return {
    type: SIGNUP_USER,
    promise: createAuthUser(email, password),
    meta: {
      onFailure: (err) => console.log(err),
      onSuccess: (res) => console.log(res)
    }
  };
};

export const loginUser = values => {
  const { email, password } = values;
  return {
    type: LOGIN_USER,
    promise: authenticateUser(email, password),
    meta: {
      onFailure: (err) => console.log(err),
      onSuccess: (res) => console.log(res)
    }
  };
};

export const logoutUser = () => {
  unAuthUser();
  return {
    type: LOGOUT_USER,
    meta: {
      onFailure: (err) => console.log(err),
      onSuccess: (res) => console.log(res)
    }
   };
};

export const checkToken = () => {
  const token = getTokenFromRedux();
  return {
    type: CHECK_TOKEN,
    promise: verifyToken(token),
    meta: {
      onFailure: (err) => console.log(err),
      onSuccess: (res) => console.log(res)
    }
  };
};
