import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9999/",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    Accept: "application/json; charset=UTF-8",
  },
  withCredentials: true,
});
export default instance;
