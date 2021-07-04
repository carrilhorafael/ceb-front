import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalContext'

export default function RestaurantManagement(){
    const {user} = useContext(GlobalContext)
    const {restaurant} = user

    return(
        <h2>Gestão de restaurante</h2>
    )

} 