import type { UserType } from '../types/user'
import { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import Toast from '../components/Toast'
import { useParams } from 'react-router'
import { getSingleUser } from '../services/api'
import { load } from '../utils'

const UserRoute = () => {
  const [user, setUser] = useState<UserType | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const params = useParams()

  const getUser = async () => {
    try {
      const res = await load(getSingleUser(params.id), setIsLoading)

      setUser(res.data.user)
    } catch {
      setIsError(true)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      {isError && (
        <Toast
          status="error"
          text="Couldn\'t get user"
          subText="Please try again later"
        />
      )}
      <h1>{`${user?.firstName} ${user?.lastName}`}</h1>
    </>
  )
}

export default UserRoute
