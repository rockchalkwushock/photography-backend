import axios from 'axios';

export const sendToBackEnd = result => {
  const promise = new Promise((resolve, reject) => {
    console.log(result);
    axios.post('/library', { result })
      .then(
        res => {
          console.log(res.data.cloudinary);
          resolve(res.data.cloudinary);
        },
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
          resolve(res.data.payload);
        },
        err => {
          reject(err);
        }
      );
  });
  return promise;
};
