import axios from 'axios';

const API_KEY = process.env.API_KEY;

const api = axios.create({
  baseURL: 'https://api.spoonacular.com',
  params: {
    apiKey: API_KEY,
  },
});

export default api;