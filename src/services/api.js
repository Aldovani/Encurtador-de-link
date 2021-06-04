import axios from "axios";

export const key = "38993cc576e409df7228e5fafa736dd60c02c47f";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4/",
  headers: {
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  },
});
export default api;
