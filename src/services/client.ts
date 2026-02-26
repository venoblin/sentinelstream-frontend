import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const Client = axios.create({ baseURL: API_BASE_URL, withCredentials: true })

export default Client
