import axios from 'axios'

const AxiosConfig = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 100000,
    // withCredentials: true
})

AxiosConfig.interceptors.request.use(function (config) {

    config.headers.token = localStorage.getItem('token')

    return config;

})

export { AxiosConfig }