import React, { useEffect, useState } from 'react'
import { getUsers } from '../../../service/Api'
import './style.css'

export default function ListUsers (){
    const [users, setUsers] = useState([])
    const [usersPerPage, setUsersPerPage] = useState(5)
    const [page, setPage] = useState(1)
    const [usersAll, setUsersAll] = useState([])

    useEffect(() => {
        getUsers().then(({data})=>{
            setUsersAll(data)
            setUsers(data.slice(0, usersPerPage*page))
        })
    }, [])
    
    const paginationHandler = newPage => {
        if (newPage > 0 && newPage < usersAll.length/usersPerPage){
            setPage(newPage)
            setUsers(usersAll.slice(newPage*usersPerPage-usersPerPage, newPage*usersPerPage))
        }
    }

    return (
        <main>
            <h2>Lista de usuários</h2>
            <div className="main_container">

                <div className='table_main'>
                    <div className="table_row first_row">
                        <p>Nome</p>
                        <p>CPF</p>
                        <p>Função</p>
                    </div>
                    {users.map(item => (
                        <div className="table_row">
                            <p>{item.name}</p>
                            <p>{item.cpf}</p>
                            <p>{item.role}</p>
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