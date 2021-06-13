import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalContext'

export default function EditProfile () {
    const {user} = useContext(GlobalContext)

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState()
    const [password_confirmation, setPasswordConfirmation] = useState()
    const [phone, setPhone] = useState(user.phone)
    const [cpf, setCpf] = useState(user.cpf)
    const [street, setStreet] = useState(user.address.street)
    const [number, setNumber] = useState(user.address.number)
    const [city, setCity] = useState(user.address.city)
    const [state, setState] = useState(user.address.state)

    return (
        <div>
            <h1>Editar perfil</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="name">Edite seu nome</label>
                    <input value={name} name="name" onChange={e => setName(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="email">Edite seu email</label>
                    <input value={email} name="email" onChange={e => setEmail(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="cpf">Edite seu cpf</label>
                    <input value={cpf} name="cpf" onChange={e => setCpf(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="phone">Edite seu telefone</label>
                    <input value={phone} name="phone" onChange={e => setPhone(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Edite sua senha</label>
                    <input type="password" value={password} name="password" onChange={e => setPassword(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="password_confirmation">Confirme sua nova senha</label>
                    <input type="password" value={password_confirmation} name="password_confirmation" onChange={e => setPasswordConfirmation(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="street">Edite sua rua</label>
                    <input value={street} name="street" onChange={e => setStreet(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="number">Edite o numero de sua residencia</label>
                    <input value={number} name="number" onChange={e => setNumber(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="city">Edite sua cidade</label>
                    <input value={city} name="city" onChange={e => setCity(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="state">Edite seu estado</label>
                    <input value={state} name="state" onChange={e => setState(e.target.value)}></input>
                </fieldset>
                <input type="submit" value="Fazer login"></input>
            </form>

        </div>
    )
}