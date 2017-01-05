import axios from 'axios';

export const sendToBackEnd = result => {
  console.log(result);
  const promise = new Promise((resolve, reject) => {
    axios.post('/library', { result })
      .then(res => {
        console.log(res);
        resolve(res);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
  return promise;
};
