import axios from "axios";

const api = axios.create({
  baseURL: "http://api-hairplace.herokuapp.com",
});

export default api;