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
  return promise;
};
