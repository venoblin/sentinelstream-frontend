import { useContext, useEffect, useState } from 'react'
import Loading from '../components/Loading'
import Toast from '../components/Toast'
import { AuthContext } from '../contexts/AuthContext'
import { load } from '../utils'
import { getAllTransactions } from '../services/api'

const TransactionsRoute = () => {
  const authContext = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [transactions, setTransactions] = useState([])

  const getTransactions = async () => {
    try {
      if (authContext?.user?.role === 'analyst') {
        const res = await load(getAllTransactions(), setIsLoading)

        setTransactions(res.data.transactions)
      } else {
        const res = await load(
          getAllTransactions(`userId=${authContext?.user?.id}`),
          setIsLoading
        )

        setTransactions(res.data.transactions)
      }
    } catch {
      setIsError(true)
    }
  }

  useEffect(() => {
    getTransactions()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      {isError && (
        <Toast
          status="error"
          text="Couldn\'t get transactions"
          subText="Please try again later"
        />
      )}

      <h1>Transactions</h1>
    </>
  )
}

export default TransactionsRoute
