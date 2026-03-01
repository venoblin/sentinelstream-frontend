import Client from './client'

export const getAllUsers = async (query?: string) => {
  if (query) return await Client.get(`/api/users?${query}`)

  return await Client.get('/api/users')
}

export const getAllTransactions = async (query?: string) => {
  if (query) return await Client.get(`/api/transactions?${query}`)

  return await Client.get('/api/transactions')
}
