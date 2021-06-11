import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import logo from '../../assets/logo.svg'
import './style.css'
import { useHistory } from 'react-router'

export default function Header () {
    const {user, authenticated, handleLogout} = useContext(GlobalContext)
    const history = useHistory()
    return(
        <header>
            <img className="header_logo" src={logo}></img>
            {authenticated?
                <button onClick={() => handleLogout(history)}>Sair</button>
                :
                null
            }
        </header>
    )
}