import type { UserLoginType, UserPayloadType, UserType } from './user'

export interface AuthContextType {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  loginUser: (payload: UserLoginType) => Promise<any>
  registerUser: (payload: UserPayloadType) => Promise<any>
  getSession: () => Promise<any>
  user: UserType | null
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>
}
