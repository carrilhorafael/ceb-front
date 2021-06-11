import React, {useState} from 'react'
import { useHistory } from 'react-router'
import {postSignUp} from '../../service/Api'

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
    const [role, setRole] = useState(1)
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
        postSignUp(userData).then(
            history.push("/")
        )

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="name">Digite seu nome</label>
                    <input value={name} name="name" onChange={e => setName(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="email">Digite seu email</label>
                    <input value={email} name="email" onChange={e => setEmail(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="cpf">Digite seu cpf</label>
                    <input value={cpf} name="cpf" onChange={e => setCpf(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="phone">Digite seu telefone</label>
                    <input value={phone} name="phone" onChange={e => setPhone(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Digite sua senha</label>
                    <input type="password" value={password} name="password" onChange={e => setPassword(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="password_confirmation">Confirme sua senha</label>
                    <input type="password" value={password_confirmation} name="password_confirmation" onChange={e => setPasswordConfirmation(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="street">Rua</label>
                    <input value={street} name="street" onChange={e => setStreet(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="number">Numero</label>
                    <input value={number} name="number" onChange={e => setNumber(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="city">Cidade</label>
                    <input value={city} name="city" onChange={e => setCity(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="state">Estado</label>
                    <input value={state} name="state" onChange={e => setState(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="role">Escolha uma função para se cadastrar</label>
                    <select value={role} name="role" onChange={e => setRole(e.target.value)}>
                        <option value={1}>Entregador</option>
                        <option value={2}>Cliente</option>
                    </select>
                </fieldset>
                <input type="submit" value="Fazer login"></input>
            </form>
        </div>
    )
}