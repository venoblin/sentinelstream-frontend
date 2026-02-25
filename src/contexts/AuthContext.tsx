import type { Authenticated } from '../types/auth'
import { createContext, useState } from 'react'

export const AuthContext = createContext<Authenticated | null>(null)

export const AuthProvider = (props: React.PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const methods = {
    isAuthenticated,
    setIsAuthenticated
  }

  return (
    <AuthContext.Provider value={methods}>
      {props.children}
    </AuthContext.Provider>
  )
}
