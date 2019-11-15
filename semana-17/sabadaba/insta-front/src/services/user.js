import axios from "axios";

export const updateUser = (id, data) => {
  const token = localStorage.getItem("token");
  return axios.patch(`http://localhost:3000/api/user/${id}`, data, {
    headers: {
      Authorization: token,
      "Content-Type": "multipart/form-data"
    }
  });
};
