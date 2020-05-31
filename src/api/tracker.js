import axios from 'axios';

export default axios.create({
  baseURL: 'http://3e416064839b.ngrok.io', // ngrok http 3000 , cmd to change url API
});
