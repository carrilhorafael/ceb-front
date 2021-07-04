import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { deleteCart, deleteOrder, getCart } from '../../../service/Api'
import './style.css'

export default function Cart () {
    const [cart, setCart] = useState()

    const handleRemoveOrder = (e, order) => {
        deleteOrder(order.id)
        .then(() => {
            getCart().then(({data})=>{
                setCart(data)
            })
        })
    }
    const handleCartDestroy = () => {
        deleteCart(cart.restaurant.id)
        .then(() => {
            setCart()
        })
    }
    useEffect(()=>{
        getCart()
        .then(({data})=>{
            setCart(data)
        })
    }, [])

    return (
        <main>
            <h2>Seu carrinho</h2>
            {!cart?
                <div className="main_container">
                    <p>Você não tem nada no carrinho</p>
                </div>
                :
                <div className="main_container cart_display">
                    <div className="title_cart">
                        <Link to={"/client/restaurant?id="+cart.restaurant.id} className="name_restaurant">{cart.restaurant.name}</Link>
                        <p className="total_price">R$ {cart.total_price.toFixed(2)}</p>
                    </div>
                    {cart.orders.map(item => (
                        <div className="cart_order">
                            <p className="product_name">{item.product.name}</p>
                            <div>
                                <p className="product_price">Preço Unitário: {item.product.price}</p>
                                <p className="product_quantity">Quantidade: {item.quantity}</p>
                            </div>
                            <div className="product_remove" onClick={e => handleRemoveOrder(e, item)}>
                                <p>Remover do carrinho</p>
                            </div>
                        </div>
                    ))}
                    <div className="div_buttons_cart">
                        <button className="secondary_button" onClick={handleCartDestroy}>Apagar o carrinho</button>
                        <button className="main_button">Finalizar a compra</button>
                    </div>
                </div>
                
            }

        </main>
    )
}