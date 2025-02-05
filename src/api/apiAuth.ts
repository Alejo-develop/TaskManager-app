import axios from 'axios';

const apiAuth = axios.create({
  baseURL: 'http://192.168.58.108:3000/taskmanager/auth/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiAuth;