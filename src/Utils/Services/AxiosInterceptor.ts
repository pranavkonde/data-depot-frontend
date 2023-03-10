import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { getAccessToken } from "./Auth";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
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
