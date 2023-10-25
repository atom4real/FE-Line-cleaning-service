import axios from "axios";

const apiClient = axios.create({
  // baseURL: process.env.NUXT_APP_BACKEND_URL,
  baseURL: 'http://127.0.0.1:8000',
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default apiClient;