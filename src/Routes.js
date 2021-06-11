import React, { useContext } from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import { GlobalContext } from './context/GlobalContext'
import Confirmate from './pages/confirmate/Confirmate'
import Home from './pages/home/Home'
import Landing from './pages/landing/Landing'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'



export default function Routes (){
    const {user, authenticated} = useContext(GlobalContext)
    return (
        <Router>
            <Switch>
                <Route exact path="/" >
                    {!authenticated?
                        <Landing/>
                        :
                        user.role === "Cliente"?
                            <Redirect to="/client/restaurants"/>
                            :
                            user.role === "Entregador" || user.role === "Entregador (Em validação)"?
                                <Redirect to="/delivery/deliverys"/>
                                :
                                user.role === "Dono de restaurante"?
                                    <Redirect to="/owner/restaurant"/>
                                    :
                                    <Redirect to="/admin/list_users"/>
                    }
                </Route>
                <Route exact path="/login" >
                    {!authenticated?
                        <Login/>
                        :
                        user.role === "Cliente"?
                            <Redirect to="/client/restaurants"/>
                            :
                            user.role === "Entregador" || user.role === "Entregador (Em validação)"?
                                <Redirect to="/delivery/deliverys"/>
                                :
                                user.role === "Dono de restaurante"?
                                    <Redirect to="/owner/restaurant"/>
                                    :
                                    <Redirect to="/admin/list_users"/>
                    }
                </Route>
                <Route exact path="/sign_up" >
                    {!authenticated?
                        <SignUp/>
                        :
                        user.role === "Cliente"?
                            <Redirect to="/client/restaurants"/>
                            :
                            user.role === "Entregador" || user.role === "Entregador (Em validação)"?
                                <Redirect to="/delivery/deliverys"/>
                                :
                                user.role === "Dono de restaurante"?
                                    <Redirect to="/owner/restaurant"/>
                                    :
                                    <Redirect to="/admin/list_users"/>
                    }
                </Route>
                <Route exact path="/confirmate">
                    <Confirmate/>
                </Route>
                <Route exact path="/edit_profile">
                    {authenticated?
                        <Confirmate/>
                        :
                        <Redirect to="/"/>
                    }
                </Route>
                {/**************** CLIENT PAGES ****************/}
                <Route exact path="/client/restaurants">
                    
                </Route>
                <Route path="/client/restaurant/*">
                    
                </Route>
                <Route path="/client/wallet"> 
                    
                </Route>
                {/**************** DELIVERYMAN PAGES ****************/}
                <Route exact path="/deliveryman/deliverys">

                </Route>
                <Route exact path="/deliveryman/wallet">

                </Route>
                {/**************** OWNER PAGES ****************/}
                <Route exact path="/owner/restaurant">

                </Route>
                <Route exact path="/owner/create_restaurant">

                </Route>
                <Route exact path="/owner/products">

                </Route> 
                <Route exact path="/owner/results">

                </Route> 
                <Route exact path="/owner/orders">

                </Route> 
                {/**************** ADMIN PAGES ****************/}
                <Route exact path="/admin/list_users">

                </Route>
                <Route exact path="/admin/list_deliverymans">

                </Route>

            </Switch>
        </Router>
    )
}