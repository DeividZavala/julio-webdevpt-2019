import axios from "axios";

export const getPost = id => {
  const token = localStorage.getItem("token");
  return axios.get(`http://localhost:3000/api/posts/${id}`, {
    headers: {
      Authorization: token
    }
  });
};

export const getPosts = () => {
  const token = localStorage.getItem("token");
  return axios.get(`http://localhost:3000/api/posts`, {
    headers: {
      Authorization: token
    }
  });
};

export const createPost = formData => {
  const token = localStorage.getItem("token");
  return axios.post("http://localhost:3000/api/posts", formData, {
    headers: {
      Authorization: token,
      "Content-Type": "multipart/form-data"
    }
  });
};

export const deletePost = id => {
  const token = localStorage.getItem("token");
  return axios.delete(`http://localhost:3000/api/posts/${id}`, {
    headers: {
      Authorization: token
    }
  });
};
