import React, { useEffect, useState } from 'react'
import { getUsers } from '../../../service/Api'

export default function ListUsers (){
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(({data})=>{
            setUsers(data)
        })
    }, [])
    return (
        <>
            <h1>Lista de usuários</h1>
            {users.map(item => (
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