import React, { useEffect, useState } from 'react'
import { changeStatus, getCart } from '../../../service/Api'
import "./style.css"

export default function RestaurantOrders(){
    const [orders, setOrders] = useState([])
    useEffect(()=>{
        getCart()
        .then(({data})=>{
            setOrders(data)
            console.log(data)
        })
    }, [])
    const handleChangeStatus = (e, cart_id) =>{
        changeStatus(cart_id)
        .then(({data}) =>{
            console.log(data)
            e.target.parentElement.remove()
        })
    }

    return(
        <main>
            <h2>Pedidos</h2>
            <div className="main_container">
            {orders.map(item => (
                <div className="carts_restaurant" >
                    <div>
                        <p className="restaurant_name">{item.user.name}</p>
                        {item.orders.map(order => (
                            <p className="cart_item">{order.quantity} | {order.product.name}</p>
                        ))}
                    </div>
                    <p>Preço Total: {item.total_price.toFixed(2)}</p>
                    <div className="restaurant_evaluated" onClick={e => handleChangeStatus(e, item.id)}>
                        <p>Marcar como pronto</p>
                    </div>
                </div>
            ))}
            </div>
        </main>
    )
}