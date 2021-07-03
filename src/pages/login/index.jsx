import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalContext'
import './style.css'

export default function Login () {
    const {handleLogin} = useContext(GlobalContext)

    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        let userData = {
            user: {
                credential: credential,
                password: password
            }
        }
        handleLogin(userData, history)
    }
    return (
        <section className="section_login">
            <form className="form_login_container" onSubmit={handleSubmit}>
                <div className="form_title_div">
                    <Link to="/">{"<"}</Link>
                    <h3>Faça login</h3>
                </div>
                <div className="form_inputs">
                    <fieldset>
                        <label htmlFor="credential">Digite seu cpf ou email</label>
                        <input className="main_input" value={credential} name="credential" onChange={e => setCredential(e.target.value)}></input>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="password">Digite sua senha</label>
                        <input className="main_input" type="password" value={password} name="password" onChange={e => setPassword(e.target.value)}></input>
                    </fieldset>
                    <input className="main_button" type="submit" value="Fazer login"></input>
                </div>
            </form>
        </section>
    )
}
