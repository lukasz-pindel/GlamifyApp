import React, { useState, useEffect, ReactNode } from "react";
import { User } from "../../model/User";
import { AuthContext, AuthContextType } from "../AuthContext";
import UserService from "../../services/UserService";
import { UserRequest } from "../../model/requests/UserRequest";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const userService = new UserService("https://localhost:44360");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (user: UserRequest) => {
    try {
      const userData = await userService.login(user.username, user.password);
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value: AuthContextType = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
