import axios from "axios";

export const getPost = id => {
  const token = localStorage.getItem("token");
  return axios.get(`https://morros.localtunnel.me/api/posts/${id}`, {
    headers: {
      Authorization: token
    }
  });
};

export const getPosts = () => {
  const token = localStorage.getItem("token");
  return axios.get(`https://morros.localtunnel.me/api/posts`, {
    headers: {
      Authorization: token
    }
  });
};

export const createPost = formData => {
  const token = localStorage.getItem("token");
  return axios.post("https://morros.localtunnel.me/api/posts", formData, {
    headers: {
      Authorization: token,
      "Content-Type": "multipart/form-data"
    }
  });
};

export const deletePost = id => {
  const token = localStorage.getItem("token");
  return axios.delete(`https://morros.localtunnel.me/api/posts/${id}`, {
    headers: {
      Authorization: token
    }
  });
};
