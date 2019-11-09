import axios from "axios";

const token = localStorage.getItem("token");

const getPost = id => {
  return axios.get(`localhost:3000/api/posts/${id}`, {
    header: {
      Authorization: token
    }
  });
};

const getPosts = () => {
  return axios.get(`localhost:3000/api/posts`, {
    header: {
      Authorization: token
    }
  });
};
