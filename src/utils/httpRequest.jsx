import axios from "axios";

const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000,
});

export const get = async (path, option = {}) => {
  const response = await httpRequest.get(path, option);
  return response.data;
};
export default httpRequest;
