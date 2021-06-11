import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {getAllRestaurants} from '../../../service/Api'
import './style.css'

export default function RestaurantShow () {
    const [restaurant, setRestaurant] = useState([])
    useEffect(() => {
        let id = window.location.href.split("?id=")[1]
        getUniqueRestaurant(id).then(({data}) => {
            setRestaurants(data)
            console.log(data)
        })
    }, [])
    return (
        <div>
            <div>
                <h3>{restaurant.name}</h3>
                <p>{restaurant.type_food}</p>
                <p>{restaurant.owner.name}</p>
                <p>{restaurant.working_at}</p>
            </div>
            <div className="index_grid_restaurants">
                {/* {restaurants.map(restaurant => (
                    <div key={restaurant.id} onClick={()=>{history.push(`/client/restaurant/${restaurant.id}`)}} className="index_grid_item">
                        <div className="restaurantLogo"></div>
                        <div>
                            <p className="restaurantName">{restaurant.name}</p>
                            <p className="restaurantTypeFood">{restaurant.type_food}</p>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    )
}