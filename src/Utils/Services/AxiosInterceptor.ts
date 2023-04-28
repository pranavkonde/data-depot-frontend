import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { getAccessToken } from "./Auth";
const appMode = (import.meta.env.VITE_APP_APPMODE as string) || null;
const accessToken = (import.meta.env.VITE_APP_ACCESS_TOKEN as string) || null;
console.log(appMode, accessToken);

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const token = appMode === "Dev" ? accessToken : getAccessToken();
    console.log(token);
    config.headers["Authorization"] = "Bearer " + token;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
