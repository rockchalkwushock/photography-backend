import axios from 'axios';

export const sendToBackEnd = result => {
  const promise = new Promise((resolve, reject) => {
    axios.post('/library', { result })
      .then(
        res => resolve(res.data.cloudinary),
        err => reject(err)
      );
  });
  return promise;
};

export const fetchFromBackEnd = () => {
  const promise = new Promise((resolve, reject) => {
    axios.get('/library')
      .then(
        res => {
          console.log(res.data.payload);
          resolve(res.data.payload);
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
  });
  console.log(promise);
  return promise;
};
