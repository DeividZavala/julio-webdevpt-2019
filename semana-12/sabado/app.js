const list = document.getElementById("list");
const span = document.querySelector("span");
const btn = document.getElementById("load");
const query = document.querySelector("input");
const search = document.getElementById("search");
const detail = document.getElementById("detail");

const getMedia = () => {
  axios.get("http://localhost:3000/api/media/").then(res => {
    console.log(res.data);
  });
};

getMedia();
