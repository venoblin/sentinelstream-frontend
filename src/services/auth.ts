import type { UserLoginType, UserPayloadType } from '../types/user'
import Client from './client'

export const login = async (payload: UserLoginType) => {
  return await Client.post('/auth/login', payload)
}

export const register = async (payload: UserPayloadType) => {
  return await Client.post('/auth/register', payload)
}

export const session = async () => {
  return await Client.get('/auth/session')
}

export const logout = async () => {
  return await Client.post('/auth/logout')
}
