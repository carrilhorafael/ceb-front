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
    if ((!isPrivate && authenticated) || ((isPrivate && authenticated) && (user.role != rolePermitted))){
        // Jogar para a primeira página da role
        switch (user.role) {
            case "Cliente":
                <Redirect to="client/restaurants"/>
                break;
            case "Entregador" || "Entregador (Em validação)":
                <Redirect to="deliveryman/deliveries"/>
                break;
            case "Dono de restaurante":
                <Redirect to="owner/restaurant"/>
                break;
            case "Administrador":
                <Redirect to="admin/list_users"/>
                break;
        }
    }
    else if (isPrivate && !authenticated){
        <Redirect to="/"/>
    }
    else{
        <Route exact path={link} component={component}/>
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
                <CustomRoute link="/owner/restaurant" component={Restaurants} isPrivate={true} rolePermitted="Dono de restaurante"/>
                
                {/**************** OWNER PAGES ****************/}
                <CustomRoute link="/owner/create_restaurant" component={Restaurants} isPrivate={true} rolePermitted="Dono de restaurante"/>
                <CustomRoute link="/owner/results" component={Restaurants} isPrivate={true} rolePermitted="Dono de restaurante"/>
                <CustomRoute link="/owner/orders" component={Restaurants} isPrivate={true} rolePermitted="Dono de restaurante"/>
                <CustomRoute link="/owner/products" component={Restaurants} isPrivate={true} rolePermitted="Dono de restaurante"/>
            </Switch>
        </Router>
    )
}