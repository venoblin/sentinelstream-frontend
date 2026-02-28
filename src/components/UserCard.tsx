import type { UserType } from '../types/user'
import { Card } from '@salt-ds/core'

const UserCard = (props: { user: UserType }) => {
  return (
    <Card style={{ width: '260px', height: '144px' }}>
      <p>{`${props.user.firstName} ${props.user.lastName}`}</p>
    </Card>
  )
}

export default UserCard
