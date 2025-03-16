import axios from "axios";

const AxiosInstace = axios.create({
  baseURL: "https://api.instagram.com/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_INSTAGRAM_TOKEN,
  },
});