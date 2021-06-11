import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing () {
    return (
        <div>
            <h1>{"Comes&Bebes"}</h1>
            <Link to="/login">Login</Link>
            <Link to="/sign_up">Cadastro</Link>
        </div>
    )
}