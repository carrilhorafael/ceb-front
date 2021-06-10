import React from 'react'
import {BrowserRouter as Router, Link, Switch} from 'react-router-dom'





export default function Routes (){

    return (
        <Router>
            <Switch>
                <Route exact path= "/"/>
                <Route exact path= "/login"/>
                <Route exact path= "/sign-up"/>
                <Route exact path= "/home"/>
            </Switch>
        </Router>
    )
}