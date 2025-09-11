import { create } from "apisauce";

const apiInstance = create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

const login = (email: string, password: string) => {
  return apiInstance.post("/auth", { email, password }).then((res) => res);
};

export default { login };
