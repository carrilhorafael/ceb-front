import React from 'react'
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom'
import Header from './common/header/Header'
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

// const CustomRoute = ({isPrivate, rolePermitted, link, component}) => {
//     const {user, authenticated} = useContext(GlobalContext)
//     console.log(link)
//     return <Route exact path={link} component={component}/>
    
//     // if ((!isPrivate && authenticated) || ((isPrivate && authenticated) && (user.role !== rolePermitted))){
//     //     console.log("1ª if")
//     //     // Jogar para a primeira página da role
//     //     switch (user.role) {
//     //         case "Cliente":
//     //             return <Redirect to="client/restaurants"/>;
//     //         case "Entregador" || "Entregador (Em validação)":
//     //             return <Redirect to="deliveryman/deliveries"/>
//     //         case "Dono de restaurante":
//     //             return <Redirect to="owner/restaurant"/>
//     //         case "Administrador":
//     //             return <Redirect to="admin/list_users"/>
//     //         }
//     //     }
//     // else if (isPrivate && !authenticated){
//     //     console.log("2ª if")
//     //     return <Redirect to="/"/>
//     // }
//     // else{
//     //     console.log("3ª if", authenticated, isPrivate, component)
//     //     return <Route exact path={link} component={component}/>
//     // }
    
// }

export default function Routes (){
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/sign_up" component={SignUp}/>
                <Route exact path="/confirmate" component={Confirmate}/>
                <Route exact path="/edit_profile" component={EditProfile}/>
                
                {/**************** CLIENT PAGES ****************/}
                <Route exact path="/client/restaurants" component={Restaurants} />
                <Route exact path="/client/restaurant" component={RestaurantShow} />
                <Route exact path="/client/cart" component={Cart} />
                <Route exact path="/client/wallet" component={Wallet} />
                
                {/**************** DELIVERYMAN PAGES ****************/}
                <Route exact path="/delivery/deliveries" component={Restaurants}/>
                <Route exact path="/delivery/wallet" component={Restaurants}/>
                <Route exact path="/delivery/deliveries" component={Restaurants}/>
                <Route exact path="/delivery/wallet" component={Restaurants}/>
                
                {/**************** ADMIN PAGES ****************/}
                <Route exact path="/admin/list_users" component={ListUsers}/>
                <Route exact path="/admin/list_deliverymen" component={Delivermen}/>
                
                {/**************** OWNER PAGES ****************/}
                <Route exact path="/owner/restaurant" component={Restaurants}/>
                <Route exact path="/owner/create_restaurant" component={Restaurants}/>
                <Route exact path="/owner/results" component={Restaurants}/>
                <Route exact path="/owner/orders" component={Restaurants}/>
                <Route exact path="/owner/products" component={Restaurants}/>
            </Switch>
        </Router>
    )
}

// export default function Routes (){
//     return (
//         <Router>
//             <Switch>
//                 <CustomRoute link="/" component={Landing} isPrivate={false}/>
//                 <CustomRoute link="/login" component={Login} isPrivate={false}/>
//                 <CustomRoute link="/sign_up" component={SignUp} isPrivate={false}/>
//                 <CustomRoute link="/confirmate" component={Confirmate} isPrivate={false}/>
//                 <CustomRoute link="/edit_profile" component={EditProfile} isPrivate={true}/>
                
//                 {/**************** CLIENT PAGES ****************/}
//                 <CustomRoute link="/client/restaurants" component={Restaurants} isPrivate={true} rolePermitted="Cliente"/>
//                 <CustomRoute link="/client/restaurant/*" component={Restaurants} isPrivate={true} rolePermitted="Cliente"/>
//                 <CustomRoute link="/client/wallet" component={Restaurants} isPrivate={true} rolePermitted="Cliente"/>
                
//                 {/**************** DELIVERYMAN PAGES ****************/}
//                 <CustomRoute link="/delivery/deliveries" component={Restaurants} isPrivate={true} rolePermitted="Entregador"/>
//                 <CustomRoute link="/delivery/wallet" component={Restaurants} isPrivate={true} rolePermitted="Entregador"/>
//                 <CustomRoute link="/delivery/deliveries" component={Restaurants} isPrivate={true} rolePermitted="Entregador (Em validação)"/>
//                 <CustomRoute link="/delivery/wallet" component={Restaurants} isPrivate={true} rolePermitted="Entregador (Em validação)"/>
                
//                 {/**************** ADMIN PAGES ****************/}
//                 <CustomRoute link="/admin/list_users" component={Restaurants} isPrivate={true} rolePermitted="Administrador"/>
//                 <CustomRoute link="/admin/list_deliverymen" component={Restaurants} isPrivate={true} rolePermitted="Administrador"/>
                
//                 {/**************** OWNER PAGES ****************/}
//                 <CustomRoute link="/owner/restaurant" component={Restaurants} isPrivate={true} rolePermitted="Dono de restaurante"/>
//                 <CustomRoute link="/owner/create_restaurant" component={Restaurants} isPrivate={true} rolePermitted="Dono de restaurante"/>
//                 <CustomRoute link="/owner/results" component={Restaurants} isPrivate={true} rolePermitted="Dono de restaurante"/>
//                 <CustomRoute link="/owner/orders" component={Restaurants} isPrivate={true} rolePermitted="Dono de restaurante"/>
//                 <CustomRoute link="/owner/products" component={Restaurants} isPrivate={true} rolePermitted="Dono de restaurante"/>
//             </Switch>
//         </Router>
//     )
// }