import axios from "axios";

const login = (email, password) => {
  return axios.post("localhost:3000/api/login", { email, password });
};

const register = (email, password) => {
  return axios.post("localhost:3000/api/signup", { email, password });
};
