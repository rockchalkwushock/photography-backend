import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api/v1';
axios.defaults.headers.post['Content-Type'] = 'application/json';
