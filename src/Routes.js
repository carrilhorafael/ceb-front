import React, { useContext } from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import { GlobalContext } from './context/GlobalContext'
import Confirmate from './pages/confirmate/Confirmate'
import Home from './pages/home/Home'
import Landing from './pages/landing/Landing'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'

// const CustomRoute = ({ isPrivate, link, component, user, authenticated }) => {
//     console.log(link, authenticated, isPrivate)
//     if ((isPrivate && authenticated) || (!isPrivate && !authenticated)){
//         console.log("aqui")
//         return <Route path={link} component={component}/>
//     }
//     else if(isPrivate && !authenticated){
//         return <Redirect to="/"/>
//     }
//     else if(!isPrivate && authenticated){
//         return <Redirect to="/home"/>
//     }
    
// }

export default function Routes (){
    const {user, authenticated} = useContext(GlobalContext)
    return (
        <Router>
            <Switch>
                <Route exact path="/" >
                    {authenticated?
                        <Redirect to="/home" />
                        :
                        <Landing/>    
                    }
                </Route>
                <Route exact path="/login" >
                    {authenticated?
                        <Redirect to="/home" />
                        :
                        <Login />    
                    }
                </Route>
                <Route exact path="/sign_up" >
                    {authenticated?
                        <Redirect to="/home"/>
                        :
                        <SignUp/>
                    }
                </Route>
                <Route exact path="/confirmate">
                    <Confirmate/>
                </Route>
                <Route exact path="/home" >
                    {authenticated?
                        <Home/>
                        :
                        <Redirect to="/"/>
                    }
                </Route>

            </Switch>
        </Router>
    )
}