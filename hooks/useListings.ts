import APIClient from "@/api/client";
import { Listing } from "@/types";
import { useQuery } from "@tanstack/react-query";

const api = new APIClient<Listing[]>("/listings");

const useListings = () => {
  return useQuery({
    queryKey: ["listings"],
    queryFn: () => api.get(),
  });
};

export default useListings;
