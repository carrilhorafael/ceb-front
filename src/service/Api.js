import axios from 'axios'

const api = axios.create({
    baseURL: "http://comesebebes-api.herokuapp.com/",
    headers:{"Content-Type": "application/json"}
})

export function fetchLogin (userData) {
    return api.post("auth/login", userData)
}
