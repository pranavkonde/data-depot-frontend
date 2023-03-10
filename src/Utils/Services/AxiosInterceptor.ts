import axios, { AxiosRequestConfig, AxiosError } from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InJhdmlzaDE3MjkiLCJhdmF0YXJVUkwiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMzExODk0MTg_dj00IiwiaWF0IjoxNjc4Mzk4OTU5LCJleHAiOjE2ODAxMjY5NTl9.DFYTWcxJ95y3Rpq97a8HE4l5HdXJoM6ieBe9DK1ZMTE";

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
