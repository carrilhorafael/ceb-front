import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Landing () {
    return (
        <>
            <section className="section_main_landing">
                <h1 >Comes&Bebes</h1>
                <h2 className="landing_subtitle">O serviço que tem a cara da sua fome</h2>
            </section>
            <div className="div_auth_cards">  
                <div className="cards_auth_landing">
                    <div className="cards_auth_image"/>
                    <div>
                        <p>Está com fome?</p>
                        <p>Crie sua conta</p>
                        <Link to='/login?role=1'>></Link>
                    </div>
                </div>
                <div className="cards_auth_landing">
                    <div className="cards_auth_image"/>
                    <div>
                        <p>É entregador?</p>
                        <p>Cadastre-se aqui</p>
                        <Link to='/login?role=2'>></Link>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </>
    )
}