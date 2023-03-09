import axios, { AxiosRequestConfig, AxiosError } from "axios";

const axiosInstance = axios.create({
  transformRequest: [
    function (
      config: AxiosRequestConfig
    ): AxiosRequestConfig<any> | Promise<AxiosRequestConfig<any>> {
      //   const token = localStorage.getItem("token");
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFycGl0Qi1kZXYiLCJhdmF0YXJVUkwiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTAxNTgwODg2P3Y9NCIsImlhdCI6MTY3ODM4OTcxMywiZXhwIjoxNjgwMTE3NzEzfQ._Zwht8SPRv-096f91tLPCn9ZY2gj0GAM-pj5_SrL-u0";

      if (token && config.headers) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
    },
  ],
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
