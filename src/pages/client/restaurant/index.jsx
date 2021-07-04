import React, { useEffect, useState } from 'react'
import ModalFood from '../../../common/modal/ModalFood'
import {getUniqueRestaurant, postOrder} from '../../../service/Api'
import './style.css'

export default function RestaurantShow () {
    const [restaurant, setRestaurant] = useState()
    const [foodShow, setFoodShow] = useState({name: "undefined", price: "undefined", description: "undefined"})
    const [show, setShow] = useState(false)
    useEffect(() => {
        let id = window.location.href.split("?id=")[1]
        getUniqueRestaurant(id).then(({data}) => {
            setRestaurant(data)
            setFoodShow(data.products[0])
        })
    }, [])
    const handleModal = product => {
        setFoodShow(product)
        setShow(true)
    }
    const addProduct = (food, quantity) => {
        let dataFood = {
            order:{
                restaurant_id: restaurant.id,
                product_id: food.id,
                quantity: parseInt( quantity )
            }
        }
        postOrder(dataFood).then(({data}) => {
            alert("Carrinho atualizado")
            setShow(false)
        })
    }
    return (
        <>
            {restaurant?
                <>
                    <main className="restaurant main_container">
                        <ModalFood
                            show={show}
                            toggleShow={()=>setShow(false)}
                            food={foodShow}
                            addProduct={addProduct}
                            />
                        <section className="section_restaurant">
                            <div>
                                <h3>{restaurant.name}</h3>
                                <p>Tipo de comida: {restaurant.type_food}</p>
                                <p>Dono: {restaurant.owner.name}</p>
                                <p>{restaurant.working_at}</p>
                            </div>
                            <div className="restaurant_image">
                            </div>
                        </section>
                        <div className="index_grid_restaurant">
                            {restaurant.products.map(product => (
                                <div key={product.id} onClick={() => handleModal(product)} className="index_grid_item">
                                    <div className="productLogo"></div>
                                    <div>
                                        <p className="productName">{product.name}</p>
                                        <p className="productPrice">R$ {product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </>
                :
                <p className="info_checkin">Carregando informações ... </p>
                }
        </>
    )
}