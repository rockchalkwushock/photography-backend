import { toastr } from 'react-redux-toastr';
import { browserHistory } from 'react-router/es';
import { CHECK_TOKEN, LOGIN_USER, LOGOUT_USER } from './types';
import { getTokenFromRedux } from '../../utils';
import {
  authenticateUser,
  unAuthUser,
  verifyToken
} from './apiMethods';

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
        browserHistory.push('/');
        toastr.warning('Not Authorized!', 'No token found.');
      }
    }
  };
};
