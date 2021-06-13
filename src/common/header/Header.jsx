import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import logo from '../../assets/logo.svg'
import './style.css'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

export default function Header () {
    const {user, authenticated, handleLogout} = useContext(GlobalContext)
    const history = useHistory()
    return(
        <header>
            <div className="main_container">

                <img className="header_logo" src={logo}></img>
                {authenticated?
                    <div>
                        <Link to="/edit_profile">Editar perfil</Link>
                        <p>{user.name}</p>
                        <p>{user.role}</p>
                        <button onClick={() => handleLogout(history)}>Sair</button>
                    </div>
                    :
                    null
                }
            </div>
        </header>
    )
}