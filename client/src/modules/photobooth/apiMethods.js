import axios from 'axios';

export const sendToBackEnd = result => (
  axios.post('/library', { result })
);

export const fetchFromBackEnd = () => (
  axios.get('/library')
);
