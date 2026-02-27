import type { UserLoginType, UserPayloadType, UserType } from './user'

export interface AuthContextType {
  isAuthenticated: boolean
  loginUser: (payload: UserLoginType) => Promise<any>
  registerUser: (payload: UserPayloadType) => Promise<any>
  getSession: () => Promise<any>
  logoutUser: () => Promise<any>
  user: UserType | null
  setAuthentication: (authenticated: boolean, user: UserType | null) => void
}
