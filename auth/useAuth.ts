import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";

export const useAuth = () => {
  const auth = useContext(AuthContext);

  const logout = () => {
    auth?.setUser(null);
    authStorage.removeToken();
  };

  return { auth, logout };
};
