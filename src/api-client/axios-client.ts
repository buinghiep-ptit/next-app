import axios from 'axios'

const isServer = typeof window === 'undefined'
console.log('isServer:', isServer)

const axiosClient = axios.create({
  baseURL: isServer ? `${process.env.API_APP_URL}/api` : '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add a response interceptor
axiosClient.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)

export default axiosClient
