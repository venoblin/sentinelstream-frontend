import type { UserType } from './user'

export interface FraudRuleType {
  id: string
  creatorId: string
  previousVersionId: string | null
  version: number
  ruleName: string
  riskScoreImpact: number
  isActive: boolean
  logicJson: {}
  creator: UserType
  previousVersion: FraudRuleType | null
  updatedAt: string
  createdAt: string
}
