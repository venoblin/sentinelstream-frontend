import type { DeviceType } from '../types/device'
import type { ColDef } from 'ag-grid-community'
import { useContext, useEffect, useState } from 'react'
import Loading from '../components/Loading'
import Toast from '../components/Toast'
import { AuthContext } from '../contexts/AuthContext'
import { load } from '../utils'
import { getAllDevices } from '../services/api'
import Grid from '../components/Grid'

const DevicesRoute = () => {
  const authContext = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [devices, setDevices] = useState<DeviceType[] | []>([])

  const filterColumns: ColDef[] = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Agent', field: 'userAgent', width: 650 },
    { headerName: 'IP', field: 'ipAddress' },
    { headerName: 'Risk Score', field: 'riskScore' },
    { headerName: 'Banned', field: 'isBanned' }
  ]

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
        <Grid filterColumns={filterColumns} data={devices} />
      ) : (
        <p>There are no devices</p>
      )}
    </>
  )
}

export default DevicesRoute
