import Client from './client'

export const getAllUsers = async (query?: string) => {
  if (query) return await Client.get(`/api/users?${query}`)

  return await Client.get('/api/users')
}

export const getAllTransactions = async (query?: string) => {
  if (query) return await Client.get(`/api/transactions?${query}`)

  return await Client.get('/api/transactions')
}

export const getAllDevices = async (query?: string) => {
  if (query) return await Client.get(`/api/device-fingerprints?${query}`)

  return await Client.get('/api/device-fingerprints')
}

export const getAllFraudRules = async (query?: string) => {
  if (query) return await Client.get(`/api/fraud-rules?${query}`)

  return await Client.get('/api/fraud-rules')
}

export const getAllAuditLogs = async (query?: string) => {
  if (query) return await Client.get(`/api/audit-logs?${query}`)

  return await Client.get('/api/audit-logs')
}
