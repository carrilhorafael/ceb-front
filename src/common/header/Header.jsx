import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import logo from '../../assets/logo.svg'
import usersvg from '../../assets/user.svg'
import carrinho from '../../assets/carrinho.svg'
import './style.css'
import { useHistory, useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import HeaderDropdown from './HeaderDropdown'
import HeaderHome from './headers_components/HeaderHome'

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
            <HeaderHome/>
        )
    }
    else if (authenticated && user.role === "Cliente"){
        return(
            <header className="header_full_container">
                <div className="main_container">
                    <Link to="/client/restaurants">
                        <img className="header_logo" src={logo} alt="logo"></img>
                    </Link>
                    <div className="header_buttons">
                        <HeaderDropdown menu={[
                            {
                                nome: "Carteira",
                                onClick: () => history.push('/client/wallet')
                            },
                            {
                                nome: "Editar dados",
                                onClick: () => history.push('/edit_profile')
                            },
                            {
                                nome: "Sair",
                                onClick: () => handleLogout(history)
                            }
                        ]} 
                        svgtoggle={usersvg}
                        header={`Olá, ${user.name.split(" ")[0]}`}
                        />
                        <Link to="/client/cart" className='dropdown-toggle'>
                            <img src={carrinho}></img>
                        </Link>
                    </div>
                </div>
            </header>
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
            <header className="header_full_container">
                <div className="main_container">
                    <Link to="/owner/restaurant">
                        <img className="header_logo" src={logo} alt="logo"></img>
                    </Link>
                </div>
            </header>
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