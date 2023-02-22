import axios, { AxiosInstance } from 'axios';

// to add interceptors
const axiosInterceptors = (axiosInstance: AxiosInstance) => {
  return axiosInstance;
};

// axios instance
export const getAxiosInstance = (): AxiosInstance => {
  return axiosInterceptors(
    axios.create({
      baseURL: 'http://localhost:3000/',
      timeout: 300000,
    }),
  );
};
