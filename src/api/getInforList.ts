import axios from 'axios';

export const getInfoList = async () => {
  console.log('test');
  const response = await axios.get('http://localhost:4000/requests');
  console.log(response.data);
  return response.data;
};
