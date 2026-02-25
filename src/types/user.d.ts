export interface UserType {
  id: number
  email: string
  firstName: string
  lastName: string
  locationCity: string
  locationCountry: string
  riskScore: number
  role: 'user' | 'analyst'
  isActive: boolean
  createdAt: string
  updatedAt: string
}
