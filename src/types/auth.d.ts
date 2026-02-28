import type { UserLoginType, UserPayloadType, UserType } from './user'

export interface AuthContextType {
  isAuthenticated: boolean
  loginUser: (payload: UserLoginType) => Promise<any>
  registerUser: (payload: UserPayloadType) => Promise<any>
  checkSession: () => Promise<any>
  logoutUser: () => Promise<any>
  user: UserType | null
}
