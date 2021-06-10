import React from 'react'
import {BrowserRouter as Router, Link, Switch} from 'react-router-dom'
import Landing from './pages/landing/Landing'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'



export default function Routes (){

    return (
        <Router>
            <Switch>
                <Route exact path= "/" component={Landing}/>
                <Route exact path= "/login" component={Login}/>
                <Route exact path= "/sign-up" component={SignUp}/>
                {/* <Route exact path= "/home"/> */}
            </Switch>
        </Router>
    )
}