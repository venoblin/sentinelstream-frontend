import type { AuthContextType } from '../types/auth'
import { createContext, useEffect, useState } from 'react'
import type { UserLoginType, UserPayloadType } from '../types/user'
import { login, register, session } from '../services/auth'
import { load } from '../utils'
import Loading from '../components/Loading'

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = (props: React.PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const loginUser = async (payload: UserLoginType) => {
    const res = await login(payload)

    return res.data
  }

  const registerUser = async (payload: UserPayloadType) => {
    const res = await register(payload)

    return res.data
  }

  const checkSession = async () => {
    try {
      const res = await load(session(), setIsLoading)

      if (res) {
      }
    } catch {}
  }

  useEffect(() => {
    checkSession()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, loginUser, registerUser }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
