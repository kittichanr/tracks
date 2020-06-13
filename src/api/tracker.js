import axios from 'axios';

export default axios.create({
  baseURL: 'http://23ee5ad81874.ngrok.io', // ngrok http 3000 , cmd to change url API
});
