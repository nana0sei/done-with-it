import React from "react";

type User = {
  user: object | null;
  setUser: React.Dispatch<React.SetStateAction<{}>>;
};

const AuthContext = React.createContext<User | null>(null);

export default AuthContext;
