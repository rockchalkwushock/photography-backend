import axios from 'axios';
import { browserHistory } from 'react-router';

export const unAuthUser = () => {
  const promise = new Promise(resolve => {
    const data = {
      message: 'Logged Out!',
      token: null,
      user: null
    };
    axios.defaults.headers.common['Authorization'] = ''; // eslint-disable-line
    browserHistory.push('/login');
    resolve(data);
  });
  return promise;
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

export const verifyToken = token => {
  const promise = new Promise((resolve, reject) => {
    axios.post('/checkToken', { token })
      .then(res => {
      resolve(res.data);
      })
      .catch(err => {
        const { expireTime } = err.response.data;
        if (expireTime) {
          reject(err);
        }
      });
  });
  return promise;
};
