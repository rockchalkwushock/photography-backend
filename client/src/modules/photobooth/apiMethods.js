import axios from 'axios';

export const sendToBackEnd = result => {
  const promise = new Promise((resolve, reject) => {
    axios.post('/library', { result })
      .then(
        res => {
          // array of object(s)...images
          // this holds the data from the Cloudinary response.
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
          // array of object(s)...images
          // this holds the data from mongo DB
          resolve(res.data.payload);
        },
        err => {
          reject(err);
        }
      );
  });
  return promise;
};
