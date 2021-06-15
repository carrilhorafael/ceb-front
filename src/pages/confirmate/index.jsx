import React, {useEffect} from 'react'
import { postConfirmation } from '../../service/Api'
import { useHistory} from 'react-router-dom'


export default function Confirmate () {
    const history = useHistory()
    useEffect(() => {
        let token = window.location.href.split("?key=")[1]
        postConfirmation(token).then(() => {
            alert("Confirmado")
            history.push("/")
        })
    }, [])
    return (
        <div>

        </div>
    )
    

}