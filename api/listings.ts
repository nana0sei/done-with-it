import apiClient from "./client";

const endpoint = "/listings";

const getListings = () => apiClient.get(endpoint).then((res) => res.data);

export default {
  getListings,
};
