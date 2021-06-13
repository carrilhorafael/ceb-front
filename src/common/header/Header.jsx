import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import logo from '../../assets/logo.svg'
import './style.css'
import { useHistory, useLocation } from 'react-router'
import { Link } from 'react-router-dom'

export default function Header () {
    const {user, authenticated, handleLogout} = useContext(GlobalContext)
    const history = useHistory()
    const location = useLocation()
    if (location.pathname !== "/login" && location.pathname !== "/sign_up"){

        return(
            <header>
            <div className="main_container header_container">

                <img className="header_logo" src={logo}></img>
                {authenticated?
                    <div>
                        <Link to="/edit_profile">Editar perfil</Link>
                        <p>{user.name}</p>
                        <p>{user.role}</p>
                        <button onClick={() => handleLogout(history)}>Sair</button>
                    </div>
                    :
                    <div>
                        <Link to="/sign_up?role=1">Cadastre-se</Link>
                        <Link to="/login">Entrar</Link>
                    </div>
                }
            </div>
        </header>
    )
    }
    else{
        return <img className="header_logo" src={logo}></img>
    }
}