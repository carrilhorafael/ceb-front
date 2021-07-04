import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { updateUser } from '../../service/Api'
import "./style.css"

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

    const handleEditar = () => {
        let userData={
            user:{
                name,
                email,
                password,
                password_confirmation,
                cpf,
                phone
            },
            address:{
                street,
                number,
                city,
                state
            }
        }
        updateUser(userData, user.id).then(() => {
            alert("Usuário editado!")
        })
    }
    return (
        <main>
            <h2>Editar perfil</h2>
            <div className="main_container">
                <div className="form_edit">
                    <form>
                        <fieldset>
                            <label htmlFor="name">Nome</label>
                            <input className="main_input" value={name} name="name" onChange={e => setName(e.target.value)}></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="email">Email</label>
                            <input className="main_input" value={email} name="email" onChange={e => setEmail(e.target.value)}></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="cpf">Cpf</label>
                            <input className="main_input" value={cpf} name="cpf" onChange={e => setCpf(e.target.value)}></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="phone">Telefone</label>
                            <input className="main_input" value={phone} name="phone" onChange={e => setPhone(e.target.value)}></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="password">Senha</label>
                            <input className="main_input" type="password" value={password} name="password" onChange={e => setPassword(e.target.value)}></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="password_confirmation">Nova senha</label>
                            <input className="main_input" type="password" value={password_confirmation} name="password_confirmation" onChange={e => setPasswordConfirmation(e.target.value)}></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="street">Rua</label>
                            <input className="main_input" value={street} name="street" onChange={e => setStreet(e.target.value)}></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="number">Numero da residencia</label>
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
                    </form>
                    <button className="main_button" onClick={handleEditar}>Editar</button>
                </div>
            </div>
        </main>
    )
}