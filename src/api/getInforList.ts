import axios from 'axios';

export const getInfoList = async () => {
  const response = await axios.get('http://localhost:4000/requests');
  return response.data;
};
