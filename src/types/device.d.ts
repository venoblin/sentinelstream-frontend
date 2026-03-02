export interface DeviceType {
  id: string
  userId: string
  deviceHash: string
  ipAddress: string
  userAgent: string
  riskScore: number
  isBanned: boolean
  createdAt: string
  updatedAt: string
}
