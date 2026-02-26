import type { UserLoginType, UserPayloadType } from './user'

export interface AuthContextType {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  loginUser: (payload: UserLoginType) => Promise<any>
  registerUser: (payload: UserPayloadType) => Promise<any>
}
