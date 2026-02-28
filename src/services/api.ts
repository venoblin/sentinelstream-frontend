import Client from './client'

export const getAllUser = async (options: {}) => {
  return await Client.get('/api/users', options)
}
