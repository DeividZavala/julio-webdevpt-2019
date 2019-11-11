import axios from "axios";

export const login = (email, password) => {
  return axios.post("http://localhost:3000/api/login", { email, password });
};

export const register = (email, password) => {
  return axios.post("http://localhost:3000/api/signup", { email, password });
};
