import { CHECK_TOKEN, LOGIN_USER, LOGOUT_USER, SIGNUP_USER } from './types';
import { authenticateUser, createAuthUser, unAuthUser } from './apiMethods';

export const signupUser = values => {
  const { email, password } = values;
  console.log(email, password);
  return {
    type: SIGNUP_USER,
    promise: createAuthUser(email, password)
  };
};

export const loginUser = values => {
  const { email, password } = values;
  return {
    type: LOGIN_USER,
    promise: authenticateUser(email, password)
  };
};

export const logoutUser = () => {
  unAuthUser();
  return { type: LOGOUT_USER };
};

export const checkToken = () => {
  return {
    type: CHECK_TOKEN,
    promise: 'function that returns promise.'
  };
};
