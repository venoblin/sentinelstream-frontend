import { useEffect, useState } from 'react'
import Toast from '../components/Toast'
import Loading from '../components/Loading'
import { load } from '../utils'
import { getAllAuditLogs } from '../services/api'
import type { AuditLogType } from '../types/log'
import { FlexItem, FlexLayout } from '@salt-ds/core'
import LogCard from '../components/LogCard'

const LogsRoute = () => {
  const [logs, setLogs] = useState<AuditLogType[] | []>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

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
        <FlexLayout wrap={true}>
          {logs.map((l) => (
            <FlexItem key={l.id}>
              <LogCard log={l} />
            </FlexItem>
          ))}
        </FlexLayout>
      ) : (
        <p>There are no logs</p>
      )}
    </>
  )
}

export default LogsRoute
