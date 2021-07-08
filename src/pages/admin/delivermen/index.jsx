import React, { useEffect, useState } from 'react'
import { getDeliverymen } from '../../../service/Api'

export default function Delivermen (){
    const [deliverymen, setDeliverymen] = useState([])

    useEffect(() => {
        getDeliverymen().then(({data})=>{
            setDeliverymen(data)
        })
    }, [])
    return (
        <>
            <h2>Admissão de Entregadores</h2>
            {deliverymen.map(item => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <button>Aceitar</button>
                    <button>Negar</button>
                </div>
            ))

            }
        </>
    )
}