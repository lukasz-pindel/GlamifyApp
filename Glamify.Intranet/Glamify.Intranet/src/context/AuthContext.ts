import { createContext, useContext } from "react";
import { User } from "../model/User";
import { UserRequest } from "../model/requests/UserRequest";

export interface AuthContextType {
  user: User | null;
  login: (userData: UserRequest) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
