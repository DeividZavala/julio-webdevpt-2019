import axios from "axios";

const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = token;

export const getPost = id => {
  return axios.get(`http://localhost:3000/api/posts/${id}`);
};

export const getPosts = () => {
  return axios.get(`http://localhost:3000/api/posts`);
};

export const createPost = formData => {
  return axios.post("http://localhost:3000/api/posts", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};
