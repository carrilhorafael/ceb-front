import React, { useEffect, useState } from 'react'
import { getDeliverymen } from '../../../service/Api'

export default function ListUsers (){
    const [deliverymen, setDeliverymen] = useState([])
    const [deliverymenPerPage, setDeliverymenPerPage] = useState(5)
    const [page, setPage] = useState(1)
    const [deliverymenAll, setDeliverymenAll] = useState([])

    useEffect(() => {
        getDeliverymen().then(({data})=>{
            setDeliverymenAll(data)
            setDeliverymen(data.slice(0, deliverymenPerPage*page))
        })
    }, [])
    
    const paginationHandler = newPage => {
        if (newPage > 0 && newPage < deliverymenAll.length/deliverymenPerPage){
            setPage(newPage)
            setDeliverymen(deliverymenAll.slice(newPage*deliverymenPerPage-deliverymenPerPage, newPage*deliverymenPerPage))
        }
    }

    return (
        <main>
            <h2>Validação de entregadores</h2>
            <div className="main_container">

                <div className='table_main'>
                    <div className="table_row first_row">
                        <p>Nome</p>
                        <p>CPF</p>
                    </div>
                    {deliverymen.map(item => (
                        <div className="table_row">
                            <p>{item.name}</p>
                            <p>{item.cpf}</p>
                            <div>
                                <button className="secondary_button"> Negar </button> 
                                <button className="main_button"> Aprovar </button> 
                            </div>
                        </div>
                    ))}
                <div>
                    <button onClick={()=>paginationHandler(page-1)}> {"< Página anterior"}</button>
                    <button onClick={()=>paginationHandler(page+1)}> {"Próxima página >"}</button>
                </div>
            </div>
            </div>
        </main>
    )
}