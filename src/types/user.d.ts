import type { DeviceType } from './device'
import type { FraudRuleType } from './fraudRule'
import type { AuditLogType } from './log'
import type { TransactionType } from './transaction'

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
  id: string
  riskScore: number
  role: 'user' | 'analyst'
  isActive: boolean
  createdAt: string
  updatedAt: string
  transactions: TransactionType[] | []
  devices: DeviceType[] | []
  createdFraudRules: FraudRuleType[] | []
  auditLogs: AuditLogType[] | []
}
