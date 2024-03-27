import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'https://facility-minder-server.vercel.app',
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
