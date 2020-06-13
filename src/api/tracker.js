import axios from 'axios';

export default axios.create({
  baseURL: 'http://28f0cfe81cdd.ngrok.io', // ngrok http 3000 , cmd to change url API
});
