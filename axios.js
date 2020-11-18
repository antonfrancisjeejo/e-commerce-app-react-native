import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.29.29:5000",
});

export default instance;
