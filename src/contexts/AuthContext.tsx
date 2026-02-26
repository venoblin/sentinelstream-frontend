import type { AuthContextType } from '../types/auth'
import { createContext, useState } from 'react'
import type { UserLoginType } from '../types/user'
import { login } from '../services/auth'

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = (props: React.PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const loginUser = async (payload: UserLoginType) => {
    const res = await login(payload)

    return res
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, loginUser }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
