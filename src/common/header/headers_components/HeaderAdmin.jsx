import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import usersvg from '../../../assets/user.svg'
import HeaderDropdown from './HeaderDropdown'
import { useHistory, useLocation } from 'react-router'
import { GlobalContext } from '../../../context/GlobalContext'

export default function HeaderAdmin(){
    const location = useLocation()
    const history = useLocation()
    const {user, handleLogout} = useContext(GlobalContext)
    return(
        <header>
            <div className="main_container">
                <nav>
                    <Link to="/owner/restaurant">
                        <img className="logo-ceb" src={logo} alt="logo"></img>
                    </Link>
                    <Link to="/admin/list_users" className={`link_header ${location.pathname === "/admin/list_users" ? "active" : ""}` }>Lista de Usuário</Link>
                    <Link to="/admin/list_deliverymen" className={`link_header ${location.pathname === "/admin/list_deliverymen" ? "active" : ""}`}>Admissão de Entregadores</Link>
                    <Link to="/admin/register_owner" className={`link_header ${location.pathname === "/admin/register_owner" ? "active" : ""}`}>Cadastrar dono de restaurante</Link>
                </nav> 
                <HeaderDropdown menu={[
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