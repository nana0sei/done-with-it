import { Listing } from "@/types";
import apiClient from "./client";
import { ApiResponse } from "apisauce";

const endpoint = "/listings";

const getListings = (): Promise<ApiResponse<Listing[]>> =>
  apiClient.get<Listing[]>(endpoint);

export default {
  getListings,
};
