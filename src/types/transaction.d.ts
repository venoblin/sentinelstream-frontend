import type { DeviceType } from './device'
import type { UserType } from './user'

export interface TransactionType {
  id: string
  userId: string
  deviceFingerprintId: string | null
  transactionChannel:
    | 'WEB'
    | 'MOBILE_APP'
    | 'ATM'
    | 'BRANCH'
    | 'POS_TERMINAL'
    | 'RECURRING_SERVER'
  amount: number
  currency: string
  merchant: string
  locationCity: string
  locationCountry: string
  status: 'PENDING' | 'APPROVED' | 'FLAGGED' | 'BLOCKED' | 'REVERSED'
  riskScore: number
  user: UserType
  deviceFingerprint: DeviceType | null
  createdAt: string
  updatedAt: string
}
