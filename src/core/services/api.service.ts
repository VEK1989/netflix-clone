import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.BASE_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
