import React, {useState} from "react"
import { Link } from "react-router-dom"
import logo from '../../../assets/logo.svg'


export default function HeaderHome (){

    return (
        <header>
            <div className="main_container">
                <Link to="/"> <img className="logo-ceb" src={logo}/></Link>
                <Link to="login"><button className="main_button">Entrar</button></Link>
            </div>
        </header>
    )

}