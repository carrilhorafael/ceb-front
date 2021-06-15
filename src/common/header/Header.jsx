import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import logo from '../../assets/logo.svg'
import usersvg from '../../assets/user.svg'
import carrinho from '../../assets/carrinho.svg'
import './style.css'
import { useHistory, useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import HeaderDropdown from './HeaderDropdown'

export default function Header () {
    const {user, authenticated, handleLogout} = useContext(GlobalContext)
    const history = useHistory()
    const location = useLocation()
    if (!authenticated && location.pathname === "/sign_up"){    
        return (
            <header className="header_full_container">
                <div className="main_container">
                    <img className="header_logo" src={logo} alt="logo"></img>
                </div>
            </header>
        )
    }
    else if (!authenticated && location.pathname === "/"){
        return(
            <header className="header_full_container">
                <div className="main_container">
                    <img className="header_logo" src={logo} alt="logo"></img>
                    <div>
                        <Link to="/sign_up?role=1">Cadastre-se</Link>
                        <Link to="/login">Entrar</Link>
                    </div>
                </div>
            </header>
        )
    }
    else if (authenticated && user.role === "Cliente"){
        return(
            <header className="header_full_container">
                <div className="main_container">
                    <img className="header_logo" src={logo} alt="logo"></img>
                    <div>
                        <Link to="/edit_profile">Editar perfil</Link>
                        <button onClick={() => handleLogout(history)}>Sair</button>
                    </div>
                </div>
            </header>
        )
    }
    else if (authenticated && (user.role === "Entregador" || user.role ==="Entregador (Em validação)")){
        return(
            <header className="header_full_container">
                <div className="main_container">
                    <img className="header_logo" src={logo} alt="logo"></img>

                </div>
            </header>
        )
    }
    else if (authenticated && user.role === "Dono de restaurante"){
        return(
            <header className="header_full_container">
                <div className="main_container">
                    <img className="header_logo" src={logo} alt="logo"></img>

                </div>
            </header>
        )
    }
    else if(authenticated && user.role === "Administrador"){
        return (
            <header className="header_full_container">
                <div className="main_container">
                    <img className="header_logo" src={logo} alt="logo"></img>
                    <div className="header_buttons">
                        <HeaderDropdown svgimg={usersvg}/>
                        <HeaderDropdown svgimg={carrinho}/>
                    </div>
                </div>
            </header>
        )
    }
    else {
        return null
    }
}