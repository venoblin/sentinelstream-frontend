import { Card } from '@salt-ds/core'
import type { DeviceType } from '../types/device'

const DeviceCard = (props: { device: DeviceType }) => {
  return (
    <Card style={{ width: '260px', height: '166px' }}>
      <h2>{props.device.userAgent}</h2>
      <p>{props.device.ipAddress}</p>
    </Card>
  )
}

export default DeviceCard
