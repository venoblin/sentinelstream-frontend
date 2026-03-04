import type { UserType } from '../types/user'
import type { ColDef, ICellRendererParams } from 'ag-grid-community'
import { Link } from 'react-router'
import { useEffect, useState } from 'react'
import { getAllUsers } from '../services/api'
import Toast from '../components/Toast'
import { load } from '../utils'
import Loading from '../components/Loading'
import Grid from './Grid'

const Users = (props: { role: 'user' | 'analyst' }) => {
  const [users, setUsers] = useState<UserType[] | []>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const filterColumns: ColDef[] = [
    {
      headerName: 'ID',
      field: 'id',
      cellRenderer: (params: ICellRendererParams) => {
        return (
          <Link to={`/${props.role}s/${params.value}`}>{params.value}</Link>
        )
      }
    },
    { headerName: 'First Name', field: 'firstName' },
    { headerName: 'Last Name', field: 'lastName' },
    { headerName: 'Email', field: 'email', width: 300 },
    { headerName: 'Country', field: 'locationCountry' },
    { headerName: 'Active', field: 'isActive' }
  ]

  const getUsers = async () => {
    try {
      const res = await load(getAllUsers(`role=${props.role}`), setIsLoading)

      setUsers(res.data.users)
    } catch {
      setIsError(true)
    }
  }

  useEffect(() => {
    getUsers()
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
          subText="Please try again later"
        />
      )}

      {users.length > 0 ? (
        <Grid filterColumns={filterColumns} data={users} />
      ) : (
        <p>There are no {`${props.role}s`}</p>
      )}
    </>
  )
}

export default Users
