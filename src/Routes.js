import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Confirmate from './pages/confirmate/Confirmate'
import Landing from './pages/landing/Landing'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'

const CustomRoute = () => {
    
}

export default function Routes (){

    return (
        <Router>
            <Switch>
                <Route exact path= "/">
                    <Landing/>
                </Route>
                <Route path= "/login">
                    <Login/>
                </Route>
                <Route path= "/sign_up">
                    <SignUp/>
                </Route>
                <Route path= "/confirmate/*" >
                    <Confirmate/>
                </Route>
                <Route path= "/home">
                    <Home/>
                </Route>
                {/* <Route exact path= "/home"/> */}
            </Switch>
        </Router>
    )
}