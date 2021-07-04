import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import usersvg from '../../../assets/user.svg'
import HeaderDropdown from './HeaderDropdown'
import { useHistory, useLocation } from 'react-router'
import { GlobalContext } from '../../../context/GlobalContext'
export default function HeaderOwner(){
    const history = useHistory()
    const location = useLocation()
    const{user, handleLogout} = useContext(GlobalContext)

    return(
        <header>
            <div className="main_container">
                <nav>
                    <Link to="/owner/restaurant">
                        <img className="logo-ceb" src={logo} alt="logo"></img>
                    </Link>
                    <Link to="/owner/restaurant" className={`link_header ${location.pathname === "/owner/restaurant" ? "active" : ""}` }>Gestão de Restaurante</Link>
                    <Link to="/owner/stock" className={`link_header ${location.pathname === "/owner/stock" ? "active" : ""}`}>Gestão de Estoque</Link>
                    <Link to="/owner/results" className={`link_header ${location.pathname === "/owner/results" ? "active" : ""}`}>Resultados</Link>
                    <Link to="/owner/orders" className={`link_header ${location.pathname === "/owner/orders" ? "active" : ""}`}>Pedidos</Link>
                </nav> 
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
            </div>
        </header>
    )
}