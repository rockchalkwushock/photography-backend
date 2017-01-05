import axios from 'axios';

export const sendToBackEnd = result => {
  console.log(result);
  const promise = new Promise((resolve, reject) => {
    axios.post('/library', { result })
      .then(
        res => {
          console.log(res.data.cloudinary);
          resolve(res.data.cloudinary);
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
