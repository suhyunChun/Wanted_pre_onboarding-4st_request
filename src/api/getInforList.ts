import client from './client';

export const getInfoList = async () => {
  const response = await client.get('http://localhost:4000/requests');
  const { data } = response;
  
  return data;
};
