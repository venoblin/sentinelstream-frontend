export interface UserLoginType {
  email: string
  password: string
}

export interface UserPayloadType {
  id: number
  email: string
  firstName: string
  lastName: string
  locationCity: string
  locationCountry: string
}

export interface UserType extends UserPayloadType {
  riskScore: number
  role: 'user' | 'analyst'
  isActive: boolean
  createdAt: string
  updatedAt: string
}
