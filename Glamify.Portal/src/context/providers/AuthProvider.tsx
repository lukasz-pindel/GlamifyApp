import React, { useState, useEffect, ReactNode } from "react"
import { User } from "../../model/User"
import { AuthContext, AuthContextType } from "../AuthContext"
import UserService from "../../services/UserService"
import { UserRequest } from "../../model/requests/UserRequest"

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const userService = new UserService("https://localhost:44360/api")

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser !== null) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (e) {
        console.error("Failed to parse user data:", e)
      }
    }
  }, [])

  const setUserAfterLogin = (userData: any) => {
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
  }

  const login = async (userRequest: UserRequest) => {
    try {
      const userData = await userService.login(userRequest.username, userRequest.password)
      console.log("API login response:", userData)
      if (userData) {
        setUserAfterLogin(userData)
      } else {
        console.error("No user data returned on login.")
      }
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    }
  }

  const register = async (userRequest: UserRequest) => {
    try {
      const userData = await userService.register(userRequest.username, userRequest.password)
      if (userData) {
        setUserAfterLogin(userData)
      } else {
        console.error("No user data returned on registration.")
      }
    } catch (error) {
      console.error("Registration failed:", error)
      throw error
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const value: AuthContextType = { user, login, logout, register }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
