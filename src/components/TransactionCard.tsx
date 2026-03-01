import type { TransactionType } from '../types/transaction'
import { Card } from '@salt-ds/core'

const TransactionCard = (props: { transaction: TransactionType }) => {
  return (
    <Card style={{ width: '260px', height: '166px' }}>
      <h2>{`${props.transaction.amount} ${props.transaction.currency} at ${props.transaction.merchant}`}</h2>
      <p>{`${props.transaction.locationCity}, ${props.transaction.locationCountry}`}</p>
      <p>{props.transaction.status}</p>
    </Card>
  )
}

export default TransactionCard
