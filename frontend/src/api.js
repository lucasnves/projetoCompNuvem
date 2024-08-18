import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.16.147.213/api/',
});

export default api;
