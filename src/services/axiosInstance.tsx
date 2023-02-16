import axios, { AxiosInstance } from 'axios';

// to add interceptors
const axiosInterceptors = (axiosInstance: AxiosInstance) => {
  return axiosInstance;
};

// axios instance
export const getAxiosInstance = (): AxiosInstance => {
  return axiosInterceptors(
    axios.create({
      timeout: 300000,
    }),
  );
};
