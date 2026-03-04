import type { ColDef, ICellRendererParams } from 'ag-grid-community'
import type { FraudRuleType } from '../types/fraudRule'
import { Link } from 'react-router'
import { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import Toast from '../components/Toast'
import { load } from '../utils'
import { getAllFraudRules } from '../services/api'
import Grid from '../components/Grid'

const FraudRulesRoute = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [fraudRules, setFraudRules] = useState<FraudRuleType[] | []>([])

  const filterColumns: ColDef[] = [
    {
      headerName: 'ID',
      field: 'id',
      cellRenderer: (params: ICellRendererParams) => {
        return <Link to={`/fraud-rules/${params.value}`}>{params.value}</Link>
      }
    },
    { headerName: 'Name', field: 'ruleName', width: 225 },
    { headerName: 'Version', field: 'version' },
    { headerName: 'Risk Score Impact', field: 'riskScoreImpact', width: 200 },
    { headerName: 'Active', field: 'isActive' },
    {
      headerName: 'Creator ID',
      field: 'creator.id',
      cellRenderer: (params: ICellRendererParams) => {
        return <Link to={`/analysts/${params.value}`}>{params.value}</Link>
      }
    }
  ]

  const getFraudRules = async () => {
    try {
      const res = await load(getAllFraudRules(), setIsLoading)

      setFraudRules(res.data.fraudRules)
    } catch {
      setIsError(true)
    }
  }

  useEffect(() => {
    getFraudRules()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      {isError && (
        <Toast
          status="error"
          text="Couldn\'t get fraud rules"
          subText="Please try again later"
        />
      )}

      <h1>Fraud Rules</h1>

      {fraudRules.length > 0 ? (
        <Grid filterColumns={filterColumns} data={fraudRules} />
      ) : (
        <p>There are no fraud rules</p>
      )}
    </>
  )
}

export default FraudRulesRoute
