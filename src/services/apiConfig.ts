import axios from "axios";

const BASE_URL = "http://localhost:8088";

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
