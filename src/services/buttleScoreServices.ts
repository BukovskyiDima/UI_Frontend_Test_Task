import { getAxiosInstance } from './axiosInstance';

// as example for request
export const getBattleScore = async (params: { id: number }) => {
  const { data } = await getAxiosInstance().get('/battleScore', { params }); // Added as request example

  return data;
};
