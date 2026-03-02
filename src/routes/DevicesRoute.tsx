import type { DeviceType } from '../types/device'
import { useContext, useEffect, useState } from 'react'
import Loading from '../components/Loading'
import Toast from '../components/Toast'
import { AuthContext } from '../contexts/AuthContext'
import { load } from '../utils'
import { getAllDevices } from '../services/api'
import { FlexItem, FlexLayout } from '@salt-ds/core'
import DeviceCard from '../components/DeviceCard'

const DevicesRoute = () => {
  const authContext = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [devices, setDevices] = useState<DeviceType[] | []>([])

  const getDevices = async () => {
    try {
      if (authContext?.user?.role === 'analyst') {
        const res = await load(getAllDevices(), setIsLoading)

        setDevices(res.data.deviceFingerprints)
      } else {
        const res = await load(
          getAllDevices(`userId=${authContext?.user?.id}`),
          setIsLoading
        )

        setDevices(res.data.deviceFingerprints)
      }
    } catch {
      setIsError(true)
    }
  }

  useEffect(() => {
    getDevices()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      {isError && (
        <Toast
          status="error"
          text="Couldn\'t get devices"
          subText="Please try again later"
        />
      )}

      <h1>Devices</h1>

      {devices.length > 0 ? (
        <FlexLayout wrap={true}>
          {devices.map((d) => (
            <FlexItem key={d.id}>
              <DeviceCard device={d} />
            </FlexItem>
          ))}
        </FlexLayout>
      ) : (
        <p>There are no devices</p>
      )}
    </>
  )
}

export default DevicesRoute
