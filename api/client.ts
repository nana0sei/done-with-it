import { create } from "apisauce";
import authStorage from "@/auth/storage";

const apiInstance = create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = async (path: string = "") => {
    const authToken = await authStorage.getToken();

    return apiInstance
      .get<T>(
        `${this.endpoint}${path}`,
        {},
        {
          headers: {
            "x-auth-token": authToken,
          },
        }
      )
      .then((res) => res.data);
  };

  create = async (data: T, path: string = "") => {
    return apiInstance
      .post<T>(`${this.endpoint}${path}`, data)
      .then((res) => res);
  };

  createMultiPart = async (
    data: FormData,
    onUploadProgress: (progress: number) => void,
    path: string = ""
  ) => {
    return apiInstance
      .post<FormData>(`${this.endpoint}${path}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progress) =>
          onUploadProgress(progress.loaded / (progress.total ?? 1)),
      })
      .then((res) => res);
  };
}

export default APIClient;
