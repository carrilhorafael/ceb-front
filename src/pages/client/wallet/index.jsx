import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { GlobalContext } from '../../../context/GlobalContext'

export default function Wallet () {
    const {user} = useContext(GlobalContext)
    const history = useHistory()
    return (
        <div>
            <button onClick={() => {history.goBack()}}>{"<"}</button>
            <h1>Saldo Disponível:</h1>
            {!user?
                null
                :
                <p>R$ {user.wallet.money}</p>
            }
        </div>
    )
}