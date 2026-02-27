interface UserBaseType {
  email: string
  firstName: string
  lastName: string
  locationCity: string
  locationCountry: string
}

export interface UserLoginType {
  email: string
  password: string
}

export interface UserPayloadType extends UserBaseType {
  password: string
}

export interface UserType extends UserBaseType {
  id: number
  riskScore: number
  role: 'user' | 'analyst'
  isActive: boolean
  createdAt: string
  updatedAt: string
  transactions: []
  devices: []
  createdFraudRules: []
  auditLogs: []
}
