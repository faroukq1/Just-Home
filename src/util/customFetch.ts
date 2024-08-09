import axios, { AxiosInstance } from "axios";

const customFetch: AxiosInstance = axios.create({
  baseURL: "http://localhost:1337/",
});

export default customFetch;
