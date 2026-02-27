import type { AuthContextType } from '../types/auth'
import { createContext, useState } from 'react'
import type { UserLoginType, UserPayloadType, UserType } from '../types/user'
import { login, logout, register, session } from '../services/auth'

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = (props: React.PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<UserType | null>(null)

  const loginUser = async (payload: UserLoginType) => {
    const res = await login(payload)

    return res.data
  }

  const registerUser = async (payload: UserPayloadType) => {
    const res = await register(payload)

    return res.data
  }

  const getSession = async () => {
    const res = await session()

    return res.data
  }

  const logoutUser = async () => {
    const res = await logout()

    return res.data
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loginUser,
        registerUser,
        getSession,
        logoutUser,
        user,
        setUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
