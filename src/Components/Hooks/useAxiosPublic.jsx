import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://todo-server-kohl.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
