import React, {useEffect} from 'react'
import {api, fetchLogin} from '../service/Api'

export const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    const [user, setUser] = React.useState({})
    const [authenticated, setAuthenticated] = React.useState(false)

    useEffect(() => {
        if (localStorage.getItem("user") !== null){
            setUser(JSON.parse(localStorage.getItem("user")))
            api.defaults.headers.Authorization = localStorage.getItem("token")
            setAuthenticated(true)
        }
    }, [])

    const handleLogin = (userData, history) => {
        fetchLogin(userData).then(resp => {
            localStorage.setItem("token", resp.data.token)
            localStorage.setItem("user", JSON.stringify(resp.data.user))
            setUser(resp.data.user)
            api.defaults.headers.Authorization = resp.data.token
            setAuthenticated(true)
            switch (resp.data.user.role) {
                case "Cliente":
                    history.push("/client/restaurants")
                    break;
                case "Entregador" || "Entregador (Em validação)":
                    history.push("/deliveryman/deliverys")
                    break;
                case "Dono de restaurante":
                    history.push("/owner/restaurant")
                    break;
                case "Administrador":
                    history.push("/admin/list_users")
                    break;
    
            }
        })
    }
    const handleLogout = (history) => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUser({})
        setAuthenticated(false)
        history.push("/")
    }

    return (
        <GlobalContext.Provider 
            value={{
                user,
                authenticated,
                handleLogout,
                handleLogin
            }}>
                {children}
        </GlobalContext.Provider>
    )
}
