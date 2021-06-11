import Axios from 'axios'

export const api = Axios.create({
    baseURL: "http://comesebebes-api.herokuapp.com/"
})

export function fetchLogin (userData) {
    return api.post("auth/login", userData)
}

export function postSignUp (userData) {
    return api.post("auth/sign_up", userData)
}

export function postConfirmation (token){
    return api.post("auth/confirm", {validation_token: token})
}

export function getAllRestaurants (){
    return api.get("restaurants")
}

export function getUniqueRestaurant (id){
    return api.get(`restaurants/${id}`)
}