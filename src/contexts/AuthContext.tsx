import type { AuthContextType } from '../types/auth'
import { createContext, useState } from 'react'

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = (props: React.PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const loginUser = async () => {}

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, loginUser }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
