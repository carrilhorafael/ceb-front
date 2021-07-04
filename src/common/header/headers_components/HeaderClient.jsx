import React, {useContext} from 'react'
import usersvg from '../../../assets/user.svg'
import carrinho from '../../../assets/carrinho.svg'
import logo from '../../../assets/logo.svg'

import HeaderDropdown from './HeaderDropdown'
import { useHistory } from 'react-router'
import { Link } from "react-router-dom"
import { GlobalContext } from '../../../context/GlobalContext'


export default function HeaderClient(){
    const history = useHistory()
    const{user, handleLogout} = useContext(GlobalContext)
    return(
        <header>
            <div className="main_container">
                <Link to="/client/restaurants">
                    <img className="logo-ceb" src={logo} alt="logo"></img>
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
                    <Link to="/client/cart" className='button_cart dropdown-toggle'>
                        <img src={carrinho}></img>
                    </Link>
                </div>
            </div>
        </header>
    )
}