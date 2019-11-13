import axios from "axios";

export const login = (email, password) => {
  return axios.post("https://morros.localtunnel.me/api/login", {
    email,
    password
  });
};

export const register = (email, password) => {
  return axios.post("https://morros.localtunnel.me/api/signup", {
    email,
    password
  });
};

export const logout = () => {
  localStorage.clear();
};
