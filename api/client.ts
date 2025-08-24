import { create } from "apisauce";

const apiInstance = create({
  baseURL: "http://192.168.0.104:9000/api",
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
}

export default APIClient;
