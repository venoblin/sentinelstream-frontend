import { Card } from '@salt-ds/core'
import type { FraudRuleType } from '../types/fraudRule'

const FraudRuleCard = (props: { fraudRule: FraudRuleType }) => {
  return (
    <Card style={{ width: '260px', height: '166px' }}>
      <h2>{props.fraudRule.ruleName}</h2>
      <p>Risk score impact: {props.fraudRule.riskScoreImpact}</p>
    </Card>
  )
}

export default FraudRuleCard
