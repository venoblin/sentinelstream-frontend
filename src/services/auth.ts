import type { UserLoginType } from '../types/user'
import Client from './client'

export const login = async (payload: UserLoginType) => {
  const res = await Client.post('/auth/login', payload)

  return res
}
