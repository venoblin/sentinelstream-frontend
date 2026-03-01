export interface TransactionType {
  id: string
  userId: string
  deviceId: string
  amount: number
  currency: string
  merchant: string
  createdAt: string
  updatedAt: string
  locationCity: string
  locationCountry: string
  status: 'PENDING' | 'APPROVED' | 'FLAGGED' | 'BLOCKED' | 'REVERSED'
  riskScore: number
}
