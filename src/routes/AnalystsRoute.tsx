import type { UserType } from '../types/user'
import { useEffect, useState } from 'react'
import { getAllUsers } from '../services/api'
import Toast from '../components/Toast'
import { load } from '../utils'
import Loading from '../components/Loading'
import UserCard from '../components/UserCard'
import { FlexLayout } from '@salt-ds/core'

const AnalystsRoute = () => {
  const [analysts, setAnalysts] = useState<UserType[] | []>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const getAnalysts = async () => {
    try {
      const res = await load(getAllUsers('role=analyst'), setIsLoading)

      if (res) {
        setAnalysts(res.data.users)
      }
    } catch {
      setIsError(true)
    }
  }

  useEffect(() => {
    getAnalysts()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      {isError && (
        <Toast
          status="error"
          text="Couldn\'t get users"
          subText="Please try again later."
        />
      )}
      <h1>Analysts</h1>

      {analysts.length ? (
        <FlexLayout justify="center" align="center">
          {analysts.map((a) => (
            <UserCard key={a.id} user={a} />
          ))}
        </FlexLayout>
      ) : (
        <p>There are no analysts</p>
      )}
    </>
  )
}

export default AnalystsRoute
