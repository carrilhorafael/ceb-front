import React, { useState, useEffect, useContext } from 'react'
import ModalAddFood from '../../../common/modal/ModalAddFood'
import { GlobalContext } from '../../../context/GlobalContext'
import { getUniqueRestaurant } from '../../../service/Api'
import './style.css'

export default function RestaurantManagement(){
    const {user} = useContext(GlobalContext)
    const [restaurant, setRestaurant] = useState({})
    const [show, setShow] = useState(false)

    useEffect(()=>{
        getUniqueRestaurant(user.restaurant.id)
        .then(({data}) => {
            setRestaurant(data)
        })
    }, [])
    
    return(
        <main>
            <ModalAddFood restaurant_id={restaurant.id} show={show} toggleShow={()=> setShow(!show)}/>
            <h2>Gestão de restaurante</h2>
                {restaurant.products?
                    <div className="main_container">
                        <div className="index_grid_restaurant">
                            {restaurant.products.map(product => (
                                <div key={product.id} onClick={() => console.log(product)} className="index_grid_item">
                                    <div className="productLogo"></div>
                                    <div>
                                        <p className="productName">{product.name}</p>
                                        <p className="productPrice">R$ {product.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="add_prato_div">
                            <p>Criar novo prato</p>
                            <button className="button_add" onClick={()=> setShow(true)}>+</button>
                        </div>
                    </div>
                :
                    <div className="main_container">
                        <p>Carregando informações...</p>
                    </div>
                }

        </main>
    )

} 