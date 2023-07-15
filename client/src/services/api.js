import Axios from "axios"

export const BASE_URL = "http://localhost:3001"

const Client = Axios.create({ baseURL: BASE_URL })

export default Client

Client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.header["authroization"] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)