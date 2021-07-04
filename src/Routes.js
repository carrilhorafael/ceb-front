import React, { useContext } from 'react'
import {BrowserRouter as Router,  Redirect,  Route, Switch} from 'react-router-dom'
import Header from './common/header/Header'
import { GlobalContext } from './context/GlobalContext'
import Delivermen from './pages/admin/delivermen'
import ListUsers from './pages/admin/list_users'
import Cart from './pages/client/cart'
import RestaurantShow from './pages/client/restaurant'
import Restaurants from './pages/client/restaurants'
import Wallet from './pages/client/wallet'
import Confirmate from './pages/confirmate'
import EditProfile from './pages/edit_profile'
import Landing from './pages/landing'
import Login from './pages/login'
import SignUp from './pages/signup'

export default function Routes (){
    const {authenticated, user} = useContext(GlobalContext)
    return (
        <Router>
            <Header/>
            <Switch>
                
                {authenticated?
                    user.role === "Cliente"? 
                        <>
                            {/**************** CLIENT PAGES ****************/}
                            <Route exact path="/client/restaurants" component={Restaurants} /> 
                            <Route exact path="/client/restaurant" component={RestaurantShow} />
                            <Route exact path="/client/cart" component={Cart} />
                            <Route exact path="/client/wallet" component={Wallet} />
                            <Route path="*"> <Redirect to="/client/restaurants"/> </Route>
                        </>
                    :
                    user.role === "Entregador" || user.role === "Entregador (Em validação)"?
                        <>
                            {/**************** DELIVERYMAN PAGES ****************/}
                            <Route exact path="/delivery/deliveries" component={Restaurants}/>
                            <Route exact path="/delivery/wallet" component={Restaurants}/>
                            <Route path="*"> <Redirect to="/delivery/deliveries"/> </Route>
                        </>    
                    :
                    user.role === "Dono de restaurante"?
                        <>
                            {/**************** OWNER PAGES ****************/}
                            <Route exact path="/owner/restaurant" component={Restaurants}/>
                            <Route exact path="/owner/create_restaurant" component={Restaurants}/>
                            <Route exact path="/owner/results" component={Restaurants}/>
                            <Route exact path="/owner/orders" component={Restaurants}/>
                            <Route exact path="/owner/products" component={Restaurants}/>
                            <Route path="*"> <Redirect to="/owner/restaurant"/> </Route>
                        </>
                    :
                        <>
                            {/**************** ADMIN PAGES ****************/}
                            <Route exact path="/admin/list_users" component={ListUsers}/>
                            <Route exact path="/admin/list_deliverymen" component={Delivermen}/>
                            <Route path="*"> <Redirect to="/admin/list_users"/> </Route>
                        </>
                :
                    <>
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/sign_up" component={SignUp}/>
                        <Route exact path="/confirmate" component={Confirmate}/>
                        <Route exact path="/edit_profile" component={EditProfile}/>
                        <Route path="*"> <Redirect to="/"/> </Route>
                    </>
                
                }
                
            </Switch>
        </Router>
    )
}

