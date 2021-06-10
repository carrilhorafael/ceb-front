import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router'
import { GlobalContext } from '../../context/GlobalContext'


export default function Login () {
    const {handleLogin} = useContext(GlobalContext)

    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleSubmit = () => {
        let userData = {
            user: {
                credential: credential,
                password: password
            }
        }
        handleLogin(userData, history)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <fieldset>
                    <label htmlFor="credential">Digite seu cpf ou email</label>
                    <input value={credential} name="credential" onChange={e => setCredential(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Digite sua senha</label>
                    <input type="password" value={password} name="password" onChange={e => setPassword(e.target.value)}></input>
                </fieldset>
                <input type="submit" value="Fazer login"></input>
            </form>
        </div>
    )
}
