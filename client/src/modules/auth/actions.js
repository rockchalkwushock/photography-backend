import { toastr } from 'react-redux-toastr';
import { browserHistory } from 'react-router';
import { CHECK_TOKEN, LOGIN_USER, LOGOUT_USER, SIGNUP_USER } from './types';
import { getTokenFromRedux } from '../../helpers';
import {
  authenticateUser,
  createAuthUser,
  unAuthUser,
  verifyToken
} from './apiMethods';

export const signupUser = values => {
  const { email, password } = values;
  return {
    type: SIGNUP_USER,
    promise: createAuthUser(email, password),
    meta: {
      onFailure: () => toastr.warning('Failure!', 'Signup failed!'),
      onSuccess: () => toastr.success('Success!', 'Sigup Successful!')
    }
  };
};

export const loginUser = values => {
  const { email, password } = values;
  return {
    type: LOGIN_USER,
    promise: authenticateUser(email, password),
    meta: {
      onFailure: () => toastr.warning('Failure!', 'Log in failed!'),
      onSuccess: () => toastr.success('Success!', 'You have been logged in!')
    }
  };
};

export const logoutUser = () => (
  {
    type: LOGOUT_USER,
    promise: unAuthUser(),
    meta: {
      onFailure: (res) => toastr.warning('Failure!', res.message),
      onSuccess: (res) => toastr.success('Success!', res.message)
    }
  }
);

export const checkToken = () => {
  const token = getTokenFromRedux();
  return {
    type: CHECK_TOKEN,
    promise: verifyToken(token),
    meta: {
      onFailure: () => {
        browserHistory.push('/login');
        toastr.warning('Not Authorized!', 'No token found.');
      }
    }
  };
};
