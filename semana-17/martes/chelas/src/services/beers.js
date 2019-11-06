import axios from "axios";

export const getBeers = () => {
  return axios.get("https://api.punkapi.com/v2/beers");
};

export const getBeer = id => {
  return axios.get(`https://api.punkapi.com/v2/beers/${id}`);
};
