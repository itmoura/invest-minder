import axios from 'axios';

export const httpLocal = axios.create({
  baseURL: 'http://localhost:8080'
})
