import * as React from "react"
import { App } from "./App"
import { AuthProvider } from "./context/providers/AuthProvider"

export const AppWrapper: React.FC = () => {
  return (
  <AuthProvider>
    <App />
  </AuthProvider>)
}
