// api.js

import axios from 'axios';


// Create a new instance of Axios with custom configurations
const api = axios.create({
  baseURL: 'http://localhost:1337/api/v1/',
  timeout: 5000,
});

// setTimeout(() => {
//   const store = useAccount()
//   api.interceptors.request.use((config) => {
//     if (store._csrf) {
//       config.headers['X-CSRF-Token'] = store._csrf;
//     }
//     return config;
//   });
// }, 100)



export default api;
