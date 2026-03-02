import type { FraudRuleType } from './fraudRule'
import type { TransactionType } from './transaction'
import type { UserType } from './user'

export interface AuditLogType {
  id: string
  transactionId: string
  analystId: string | null
  fraudRuleId: string | null
  actionTaken:
    | 'SYSTEM_FLAGGED'
    | 'SYSTEM_BLOCKED'
    | 'INVESTIGATION_OPENED'
    | 'NOTE_ADDED'
    | 'ESCALATED'
    | 'CONFIRMED_FRAUD'
    | 'FALSE_POSITIVE'
  actorName: string
  notes: string
  createdAt: string
  updatedAt: string
  analyst: UserType | null
  fraudRule: FraudRuleType | null
  transaction: TransactionType
}
