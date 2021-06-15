import React, { useEffect, useState } from 'react'
import {getUniqueRestaurant} from '../../../service/Api'
import './style.css'

export default function RestaurantShow () {
    const [restaurant, setRestaurant] = useState(       )
    useEffect(() => {
        let id = window.location.href.split("?id=")[1]
        getUniqueRestaurant(id).then(({data}) => {
            setRestaurant(data)
            console.log(data)
        })
    }, [])
    return (
        <>
            {restaurant?
                <>
                    <section className="section_restaurant">

                        <div>
                            <h3>{restaurant.name}</h3>
                            <p>{restaurant.type_food}</p>
                            <p>{restaurant.owner.name}</p>
                            <p>{restaurant.working_at}</p>
                        </div>
                        <div className="restaurant_image">

                        </div>
                    </section>
                    <div className="index_grid_restaurants">
                        {restaurant.products.map(product => (
                            <div key={product.id} onClick={()=>{console.log(`/client/product/${product.id}`)}} className="index_grid_item">
                                <div className="productLogo"></div>
                                <div>
                                    <p className="productName">{product.name}</p>
                                    <p className="productPrice">R$ {product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
                :
                <p>Carregando informações ... </p>
                }
        </>
    )
}