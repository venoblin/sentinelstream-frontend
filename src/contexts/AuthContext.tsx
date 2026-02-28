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

    if (res) {
      setAuthentication(true, res.data.user)
    }
  }

  const registerUser = async (payload: UserPayloadType) => {
    const registerRes = await register(payload)

    if (registerRes) {
      await loginUser({
        email: payload.email,
        password: payload.password
      })
    }
  }

  const logoutUser = async () => {
    await logout()
    setAuthentication(false, null)
  }

  const checkSession = async () => {
    const res = await session()

    if (res) {
      setAuthentication(true, res.data.user)
    } else {
      setAuthentication(false, null)
    }
  }

  const setAuthentication = (authenticated: boolean, user: UserType | null) => {
    setIsAuthenticated(authenticated)
    setUser(user)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loginUser,
        registerUser,
        checkSession,
        logoutUser,
        user
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
