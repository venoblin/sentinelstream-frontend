import { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import Toast from '../components/Toast'
import { load } from '../utils'
import { getAllFraudRules } from '../services/api'
import TransactionCard from '../components/TransactionCard'
import { FlexItem, FlexLayout } from '@salt-ds/core'
import type { FraudRuleType } from '../types/fraudRule'
import FraudRuleCard from '../components/FraudRuleCard'

const FraudRulesRoute = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [fraudRules, setFraudRules] = useState<FraudRuleType[] | []>([])

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
        <FlexLayout wrap={true}>
          {fraudRules.map((f) => (
            <FlexItem key={f.id}>
              <FraudRuleCard fraudRule={f} />
            </FlexItem>
          ))}
        </FlexLayout>
      ) : (
        <p>There are no fraud rules</p>
      )}
    </>
  )
}

export default FraudRulesRoute
