import axios from "axios";

export const apiEndPoint = "localhost:8000";

const api = axios.create({ baseURL: apiEndPoint });

api.defaults.headers = "application/json";
api.interceptors.request.use((conf) => {
  const token = window.localStorage.getItem("token");
  if (token) {
    conf.headers = {
      Authorization: `JWT ${token}`,
    };
  }
  return conf;
});

export default api;
