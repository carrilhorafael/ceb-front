import React, { useContext } from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import { GlobalContext } from './context/GlobalContext'
import Restaurants from './pages/client/restaurants'
import Confirmate from './pages/confirmate'
import EditProfile from './pages/edit_profile'
import Landing from './pages/landing'
import Login from './pages/login'
import SignUp from './pages/signup'

const CustomRoute = ({isPrivate, rolePermitted, link, component}) => {
    const {user, authenticated} = useContext(GlobalContext)
    if ((!isPrivate && authenticated) || ((isPrivate && authenticated) && (user.role !== rolePermitted))){
        console.log("1ª if")
        // Jogar para a primeira página da role
        switch (user.role) {
            case "Cliente":
                return <Redirect to="client/restaurants"/>;
            case "Entregador" || "Entregador (Em validação)":
                return <Redirect to="deliveryman/deliveries"/>
            case "Dono de restaurante":
                return <Redirect to="owner/restaurant"/>
            case "Administrador":
                return <Redirect to="admin/list_users"/>
            }
        }
    else if (isPrivate && !authenticated){
        console.log("2ª if")
        return <Redirect to="/"/>
    }
    else{
        console.log("3ª if", authenticated, isPrivate, component)
        return <Route exact path={link} component={component}/>
    }
    
}

export default function Routes (){
    return (
        <Router>
            <Switch>
                <CustomRoute link="/" component={Landing} isPrivate={false}/>
                <CustomRoute link="/login" component={Login} isPrivate={false}/>
                <CustomRoute link="/sign_up" component={SignUp} isPrivate={false}/>
                <CustomRoute link="/confirmate" component={Confirmate} isPrivate={false}/>
                <CustomRoute link="/edit_profile" component={EditProfile} isPrivate={true}/>
                
                {/**************** CLIENT PAGES ****************/}
                <CustomRoute link="/client/restaurants" component={Restaurants} isPrivate={true} rolePermitted="Cliente"/>
                <CustomRoute link="/client/restaurant/*" component={Restaurants} isPrivate={true} rolePermitted="Cliente"/>
                <CustomRoute link="/client/wallet" component={Restaurants} isPrivate={true} rolePermitted="Cliente"/>
                
                {/**************** DELIVERYMAN PAGES ****************/}
                <CustomRoute link="/delivery/deliveries" component={Restaurants} isPrivate={true} rolePermitted="Entregador"/>
                <CustomRoute link="/delivery/wallet" component={Restaurants} isPrivate={true} rolePermitted="Entregador"/>
                <CustomRoute link="/delivery/deliveries" component={Restaurants} isPrivate={true} rolePermitted="Entregador (Em validação)"/>
                <CustomRoute link="/delivery/wallet" component={Restaurants} isPrivate={true} rolePermitted="Entregador (Em validação)"/>
                
                {/**************** ADMIN PAGES ****************/}
                <CustomRoute link="/admin/list_users" component={Restaurants} isPrivate={true} rolePermitted="Administrador"/>
                <CustomRoute link="/admin/list_deliverymen" component={Restaurants} isPrivate={true} rolePermitted="Administrador"/>
                
                {/**************** OWNER PAGES ****************/}
                <CustomRoute link="/owner/restaurant" component={Restaurants} isPrivate={true} rolePermitted="Dono de restaurante"/>
                <CustomRoute link="/owner/create_restaurant" component={Restaurants} isPrivate={true} rolePermitted="Dono de restaurante"/>
                <CustomRoute link="/owner/results" component={Restaurants} isPrivate={true} rolePermitted="Dono de restaurante"/>
                <CustomRoute link="/owner/orders" component={Restaurants} isPrivate={true} rolePermitted="Dono de restaurante"/>
                <CustomRoute link="/owner/products" component={Restaurants} isPrivate={true} rolePermitted="Dono de restaurante"/>
            </Switch>
        </Router>
    )
}