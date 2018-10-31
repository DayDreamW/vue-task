import axios from 'axios'
import vue from 'vue'
import { promises } from 'fs';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// request interceptor
axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

// response interceptor
axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject(error)
})

// packging post request of axios
export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
        .then(response => {
            resolve(response.data)
        }).catch(err => {
            reject(err)
        })
    })
}

export default {
    JH_news(url, params) {
        return fetch(url, params)
    }
}