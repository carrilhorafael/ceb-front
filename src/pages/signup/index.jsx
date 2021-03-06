import React, {useState} from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import {postSignUp} from '../../service/Api'
import './style.css'

export default function SignUp () {
    const [name, setName] = useState("Rafael Carrilho")
    const [email, setEmail] = useState("rafaelcarrilho@id.uff.br")
    const [password, setPassword] = useState("12345678")
    const [password_confirmation, setPasswordConfirmation] = useState("12345678")
    const [phone, setPhone] = useState("(21)98888-1111")
    const [cpf, setCpf] = useState("176.699.507-14")
    const [street, setStreet] = useState("Rua Francisco Fonseca")
    const [number, setNumber] = useState("132")
    const [city, setCity] = useState("Niteroi")
    const [state, setState] = useState("Rio de Janeiro")
    const [role, setRole] = useState(parseInt(window.location.href.split("?role=")[1]))
    const history = useHistory()
    const handleSubmit = e => {
        e.preventDefault()
        let userData = {
            user:{
                name,
                email,
                password,
                password_confirmation,
                phone,
                cpf,
                role
            },
            address:{
                street,
                number,
                city,
                state
            }
        }
        console.log(userData)
        postSignUp(userData).then(() => history.push("/"))

    }
    return (
        <main>
            <form className="form_signup_container" onSubmit={handleSubmit}>
                <div className="form_title_div">
                    <Link to="/">{"<"}</Link>
                    <h3>Cadastre-se</h3>
                </div>
                <div className="form_signup">
                    <fieldset>
                        <label htmlFor="name">Nome</label>
                        <input className="main_input" value={name} name="name" onChange={e => setName(e.target.value)}></input>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email">Email</label>
                        <input className="main_input" value={email} name="email" onChange={e => setEmail(e.target.value)}></input>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="cpf">CPF</label>
                        <input className="main_input" value={cpf} name="cpf" onChange={e => setCpf(e.target.value)}></input>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="phone">Telefone</label>
                        <input className="main_input" value={phone} name="phone" onChange={e => setPhone(e.target.value)}></input>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="password">Digite sua senha</label>
                        <input className="main_input" type="password" value={password} name="password" onChange={e => setPassword(e.target.value)}></input>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="password_confirmation">Confirme sua senha</label>
                        <input className="main_input" type="password" value={password_confirmation} name="password_confirmation" onChange={e => setPasswordConfirmation(e.target.value)}></input>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="street">Rua</label>
                        <input className="main_input" value={street} name="street" onChange={e => setStreet(e.target.value)}></input>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="number">Numero</label>
                        <input className="main_input" value={number} name="number" onChange={e => setNumber(e.target.value)}></input>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="city">Cidade</label>
                        <input className="main_input" value={city} name="city" onChange={e => setCity(e.target.value)}></input>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="state">Estado</label>
                        <input className="main_input" value={state} name="state" onChange={e => setState(e.target.value)}></input>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="role">Escolha uma fun????o para se cadastrar</label>
                        <select className="main_input" value={role} name="role" onChange={e => setRole(e.target.value)}>
                            <option value={1}>Cliente</option>
                            <option value={2}>Entregador</option>
                        </select>
                    </fieldset>
                </div>  
                <input className="main_button" type="submit" value="Cadastrar"></input>
            </form>
        </main>
    )
}