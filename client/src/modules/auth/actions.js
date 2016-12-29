import axios from 'axios';
import { browserHistory } from 'react-router';
import { SIGNUP_USER } from './types';

export const signupUser = values => {
  const { email, password } = values;

  return {
    type: SIGNUP_USER,
    promise: axios.post('/api/v1/signup', { email, password })
         .then(res => {
           localStorage.setItem('token', res.data.token); // eslint-disable-line
           axios.defaults.headers.common['Authorization'] = res.data.token; // eslint-disable-line
           browserHistory.push('/admin');
         }),
    meta: {
      onFailure: err => console.log(err),
    }
  };
};
