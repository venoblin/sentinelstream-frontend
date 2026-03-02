import { Card } from '@salt-ds/core'
import type { AuditLogType } from '../types/log'

const LogCard = (props: { log: AuditLogType }) => {
  return (
    <Card style={{ width: '260px', height: '166px' }}>
      <h2>{`${props.log.transaction.amount} ${props.log.transaction.currency} at ${props.log.transaction.merchant}`}</h2>
      <p>{props.log.actorName}</p>
      <p>{props.log.actionTaken}</p>

      {props.log.notes && <p>{props.log.notes}</p>}
    </Card>
  )
}

export default LogCard
