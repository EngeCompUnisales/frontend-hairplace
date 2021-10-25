import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-hairplace.herokuapp.com',
});

export default api;
