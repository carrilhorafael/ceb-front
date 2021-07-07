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

export function authTokenVerification(token){
    return api.get("auth/validate_user", {
        headers: {"Authorization": token}
    })
}

export function getUniqueRestaurant (id){
    return api.get(`restaurants/${id}`)
}

export function getDeliverymen (){
    return api.get("/delivermen")
}

export function getUsers (){
    return api.get("/users")
}

export function postOrder( dataOrder ){
    return api.post("/orders", dataOrder)
}

export function getCart (){
    return api.get("/orders")
}

export function deleteOrder(orderId){
    return api.delete("/orders/"+orderId)
}

export function deleteCart(restaurantId){
    return api.delete("/carts/"+restaurantId)
}

export function updateUser(userData, userId){
    return api.put("/users/"+userId, userData)
}

export function getHistory(){
    return api.get("/carts/history")
}

export function changeStatus(cartId){
    return api.post("/orders/change/"+cartId, {})
}

export function postProduct(product){
    return api.post("/products", product)
}