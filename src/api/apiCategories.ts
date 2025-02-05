import axios from 'axios';

const apiCategories = axios.create({
  baseURL: 'http://192.168.89.8:3000/taskmanager/categories/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiCategories;