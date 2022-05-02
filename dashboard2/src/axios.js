import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:4040"
  //http://localhost:4040
  //http://143.110.240.79:4040
});

axios.interceptors.request.use(function(config) {
  config.headers['x-access-token'] = localStorage.getItem('token')
   config.headers['content-type'] = 'application/json'
  return config;
});

//baseURL: "http://143.110.240.79:4040"

// axios.interceptors.response.use(
//   function(response) {
//     return response.data;
//   },
//   function(error) {
//     if (error.response && error.response.status === 401) {
//       store.dispatch("logout");
//       return Promise.reject({
//         message: "Login Expired!"
//       });
//     }

//     if (error.response && error.response.status === 400) {
//       return Promise.reject({
//         error: error.response.data.error
//       });
//     }

//     if (error.response && error.response.status === 500) {
//       console.log(error.response);
//       return Promise.reject({
//         error: "Something went wrong!"
//       });
//     }
//   }
// );
export default axios;
