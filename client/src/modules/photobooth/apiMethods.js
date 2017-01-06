import axios from 'axios';

export const sendToBackEnd = result => {
  console.log(result);
  const promise = new Promise((resolve, reject) => {
    axios.post('/library', { result })
      .then(
        res => resolve(res.data.cloudinary),
        err => reject(err)
      );
  });
  console.log(promise);
  return promise;
};

export const fetchFromBackEnd = () => {
  const promise = new Promise(() => {
    axios.get('/library')
      .then(
        res => console.log(res.data),
        err => console.log(err)
      );
  });
  console.log(promise);
  return promise;
};
