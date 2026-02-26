import type { AuthContextType } from '../types/auth'
import { createContext, useState } from 'react'
import type { UserLoginType, UserPayloadType } from '../types/user'
import { login, register } from '../services/auth'

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = (props: React.PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const loginUser = async (payload: UserLoginType) => {
    const res = await login(payload)

    return res.data
  }

  const registerUser = async (payload: UserPayloadType) => {
    const res = await register(payload)

    return res.data
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, loginUser, registerUser }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
