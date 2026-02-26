import type { AuthContextType } from '../types/auth'
import { createContext, useEffect, useState } from 'react'
import type { UserLoginType, UserPayloadType } from '../types/user'
import { login, register, session } from '../services/auth'

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

  const checkSession = async () => {
    const res = await session()

    console.log(res.data)
  }

  useEffect(() => {
    checkSession()
  }, [])

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, loginUser, registerUser }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
