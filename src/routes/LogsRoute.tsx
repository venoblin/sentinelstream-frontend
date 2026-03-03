import type { AuditLogType } from '../types/log'
import type { ColDef } from 'ag-grid-community'
import { useEffect, useState } from 'react'
import Toast from '../components/Toast'
import Loading from '../components/Loading'
import { load } from '../utils'
import { getAllAuditLogs } from '../services/api'
import Grid from '../components/Grid'

const LogsRoute = () => {
  const [logs, setLogs] = useState<AuditLogType[] | []>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const filterColumns: ColDef[] = [
    { headerName: 'Actor', field: 'actorName' },
    { headerName: 'Action Taken', field: 'actionTaken' },
    { headerName: 'Notes', field: 'notes', width: 250 }
  ]

  const getAuditLogs = async () => {
    try {
      const res = await load(getAllAuditLogs(), setIsLoading)

      setLogs(res.data.auditLogs)
    } catch {
      setIsError(true)
    }
  }

  useEffect(() => {
    getAuditLogs()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      {isError && (
        <Toast
          status="error"
          text="Couldn\'t get logs"
          subText="Please try again later"
        />
      )}

      <h1>Logs</h1>

      {logs.length > 0 ? (
        <Grid filterColumns={filterColumns} data={logs} />
      ) : (
        <p>There are no logs</p>
      )}
    </>
  )
}

export default LogsRoute
