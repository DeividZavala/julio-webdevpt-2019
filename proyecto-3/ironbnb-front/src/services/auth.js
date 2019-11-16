import axios from "axios";
const isProduction = process.env.NODE_ENV === "production";
const base_url = isProduction ? "heroku.com" : "http://localhost:3000/api";

export const login = data => {
  return axios.post(`${base_url}/login`, data);
};

export const signup = data => {
  return axios.post(`${base_url}/signup`, data);
};

export const logout = () => {
  localStorage.clear();
};
