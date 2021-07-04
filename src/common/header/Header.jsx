import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import logo from '../../assets/logo.svg'
import './style.css'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import HeaderHome from './headers_components/HeaderHome'
import HeaderClient from './headers_components/HeaderClient'
import HeaderOwner from './headers_components/HeaderOwner'

export default function Header () {
    const {user, authenticated} = useContext(GlobalContext)
    const location = useLocation()

    if (!authenticated && location.pathname === "/sign_up"){    
        return (
            <div className="main_container">
                <Link to="/"> <img className="logo-ceb" src={logo}/></Link>
            </div>
        )
    }
    else if (!authenticated && location.pathname === "/"){
        return(
            <HeaderHome/>
        )
    }
    else if (authenticated && user.role === "Cliente"){
        return(
            <HeaderClient/>
        )
    }
    else if (authenticated && (user.role === "Entregador" || user.role ==="Entregador (Em validação)")){
        return(
            <header className="header_full_container">
                <div className="main_container">
                    <Link to="/deliveryman/restaurants">
                        <img className="header_logo" src={logo} alt="logo"></img>
                    </Link>
                </div>
            </header>
        )
    }
    else if (authenticated && user.role === "Dono de restaurante"){
        return(
            <HeaderOwner/>
        )
    }
    else if(authenticated && user.role === "Administrador"){
        return (
            <header className="header_full_container">
                <div className="main_container">
                    <Link to="/admin/list_users">
                        <img className="header_logo" src={logo} alt="logo"></img>
                    </Link>
                    <div className="header_buttons">
                        <button >Sair</button>

                    </div>
                </div>
            </header>
        )
    }
    else {
        return null
    }
}