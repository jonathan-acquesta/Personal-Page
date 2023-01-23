import Vue from 'vue'

import axios from 'axios'


const axiosClient = axios.create({
  baseURL: 'https://1493-2804-388-e058-f551-39f2-80d7-a894-2f3f.sa.ngrok.io',
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  withCredentials: true
})

axiosClient.interceptors.request.use(config => {
  const { headers } = config
  
  headers.Authorization = `Bearer 2HhgCEt6NmUHBL6swuWYH4B4ddS_2DK3HxJDud8ycPc66rc6Y`
  return config
})

axiosClient.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    const {
      config,
      config: { errorHandle }
    } = error

    if (config && !errorHandle) {
      return Promise.reject(error)
    }

    if (error.response && error.response.status === 401) {
      Vue.$toast.error('Sua sessão expirou, efetue login novamente.')
    }

    const { data } = error?.response || {}
    Vue.$toast.error(
      data ? data?.message : 'Algo inesperado aconteceu, tente efetuar o login novamente.'
    )
  }
)

export default axiosClient
