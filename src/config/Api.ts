import axios from "axios";

const PATH =  process.env.NODE_ENV === "development" ? "http://localhost:3000/" : "https://maisonperfume.net/";
//TODO: fix url
export const axiosClient = axios.create({
  // withCredentials: true,
  baseURL: PATH,
  // headers: {
  //   "Access-Control-Allow-Origin": "https://thomparfum.vn, https://www.thomparfum.vn",
  // }
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response.data.message)
);

export default axiosClient;
