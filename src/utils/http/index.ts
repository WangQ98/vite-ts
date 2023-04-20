import Axios from "./request";

export const http = new Axios({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000,
});
