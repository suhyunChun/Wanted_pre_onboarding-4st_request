import client from './client';

export const getInfoList = async () => {
  const response = await client.get('https://wantedrequire.herokuapp.com/requests');
  const { data } = response;

  return data;
};
