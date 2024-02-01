import axios from "axios";

export const fetchData = (skip: number = 0) =>
  axios.get(`https://dummyjson.com/products?limit=8&skip=${skip}`);

export const url = (id: number) =>
  axios.get(`https://dummyjson.com/products/${id}`);
