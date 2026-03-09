import axios from "axios";

const useApi = () => {
  const api = axios.create({
    baseURL: "http://localhost:3000/api",
  });

  return api;
};

export default useApi;
