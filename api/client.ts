import { create } from "apisauce";

const apiInstance = create({
  baseURL: "http://192.168.0.102:9000/api",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = async (path: string = "") => {
    return apiInstance
      .get<T>(`${this.endpoint}${path}`)
      .then((res) => res.data);
  };

  create = async (data: T, path: string = "") => {
    return apiInstance
      .post<T>(`${this.endpoint}${path}`, data)
      .then((res) => res);
  };
}

export default APIClient;
