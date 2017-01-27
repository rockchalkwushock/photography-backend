import axios from 'axios';

axios.defaults.baseURL = '/api/v1';
axios.defaults.headers.post['Content-Type'] = 'application/json';
