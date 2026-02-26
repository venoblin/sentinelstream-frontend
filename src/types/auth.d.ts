import type { UserLoginType } from './user'

export interface AuthContextType {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  loginUser: (payload: UserLoginType) => void
}
