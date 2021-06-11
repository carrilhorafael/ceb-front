import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {getAllRestaurants} from '../../../service/Api'
import './style.css'

export default function Restaurants () {
    const [restaurants, setRestaurants] = useState([])
    const history = useHistory()
    useEffect(() => {
        getAllRestaurants().then(({data}) => {
            setRestaurants(data)
            console.log(data)
        })
    }, [])
    return (
        <div>
            <h1>O que vamos pedir hoje?</h1>
            <div className="index_grid_restaurants">
                {restaurants.map(restaurant => (
                    <div key={restaurant.id} onClick={()=>{history.push(`/client/restaurant?id=${restaurant.id}`)}} className="index_grid_item">
                        <div className="restaurantLogo"></div>
                        <div>
                            <p className="restaurantName">{restaurant.name}</p>
                            <p className="restaurantTypeFood">{restaurant.type_food}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}