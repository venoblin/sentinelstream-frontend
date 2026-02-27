import type { UserLoginType, UserPayloadType } from '../types/user'
import Client from './client'

export const login = async (payload: UserLoginType) => {
  const res = await Client.post('/auth/login', payload)

  return res
}

export const register = async (payload: UserPayloadType) => {
  const res = await Client.post('/auth/register', payload)

  return res
}

export const session = async () => {
  const res = await Client.get('/auth/session')

  return res
}

export const logout = async () => {
  const res = await Client.post('/auth/logout')

  return res
}
