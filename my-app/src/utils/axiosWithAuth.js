import axios from 'axios'
import {BASE_URL} from './URLS'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: BASE_URL
    })
}