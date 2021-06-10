import React from 'react'
import {fetchLogin} from '../service/Api'

export const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    const [user, setUser] = React.useState({})

    const handleLogin = (userData, history) => {
        fetchLogin(userData).then(resp => {
            localStorage.setItem("token", resp.data.token)
            setUser(resp.data.user)
            history.push = "/"
        })
    }

    return (
        <GlobalContext.Provider 
            value={{
                user,
                handleLogin
            }}>
                {children}
        </GlobalContext.Provider>
    )
}
