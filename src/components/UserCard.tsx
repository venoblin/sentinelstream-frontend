import type { UserType } from '../types/user'
import { capitalizeStr } from '../utils'
import { Card } from '@salt-ds/core'

const UserCard = (props: { user: UserType }) => {
  return (
    <Card style={{ width: '260px', height: '166px' }}>
      <h2>{`${props.user.firstName} ${props.user.lastName}`}</h2>
      <p>{capitalizeStr(props.user.role)}</p>
      <p>{`${props.user.locationCity}, ${props.user.locationCountry}`}</p>
    </Card>
  )
}

export default UserCard
