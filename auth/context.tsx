import React from "react";

export interface User {
  userId: number;
  name: string;
  email: string;
  iat: number;
}

interface AuthObject {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = React.createContext<AuthObject | null>(null);

export default AuthContext;
