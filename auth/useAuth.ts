import { useContext } from "react";
import AuthContext, { User } from "./context";
import authStorage from "./storage";
import { jwtDecode } from "jwt-decode";

export const useAuth = () => {
  const auth = useContext(AuthContext);

  const login = (authToken: string) => {
    const user = jwtDecode(authToken) as User;
    auth?.setUser(user);
    authStorage.storeToken(authToken);
  };

  const logout = () => {
    auth?.setUser(null);
    authStorage.removeToken();
  };

  return { auth, login, logout };
};
