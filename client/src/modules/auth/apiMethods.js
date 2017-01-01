import axios from 'axios';
import { browserHistory } from 'react-router';

export const unAuthUser = () => {
  axios.defaults.headers.common['Authorization'] = ''; // eslint-disable-line
  browserHistory.push('/login');
};

export const createAuthUser = (email, password) => {
  const promise = new Promise(resolve => {
    axios.post('/signup', { email, password })
      .then(res => {
        const data = res.data;
        axios.defaults.headers.common['Authorization'] = res.data.token; // eslint-disable-line
        browserHistory.push('/admin');
        resolve(data);
      });
  });
  return promise;
};

export const authenticateUser = (email, password) => {
  const promise = new Promise(resolve => {
    axios.post('/login', { email, password })
      .then(res => {
        const data = res.data;
        axios.defaults.headers.common['Authorization'] = res.data.token; // eslint-disable-line
        browserHistory.push('/admin');
        resolve(data);
      });
  });
  return promise;
};
