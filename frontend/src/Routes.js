import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Signup from './Components/Signup';
import Login from './Components/Login';
import Profile from './Components/Profile';
import ProductForm from './Components/ProductForm';
import AddImage from './Components/AddImage';
import Home from './Components/Home';
import Detail from './Components/Detail';
import SignupChef from './Components/SignupChef';
import Logout from './Components/Logout';
import { Redirect } from 'react-router-dom'

export default ({ isLogged, logIn , logOut, user})=>(<Switch>

    <Route path="/signup" component={Signup}/>
    <Route path="/chef/signup" component={SignupChef}/>
    <Route path="/login" render={(props=>isLogged?<Redirect to={'/'}/>:<Login {...props} logIn={logIn}/>)} />
    <Route path="/logout" render={(props=>isLogged? <Logout {...props} logOut={logOut}/>: <Redirect to={'/'}/>)} />

    <Route path="/home" component={Home}/>
    <Route path="/profile" component={Profile} />
    <Route path="/new/product" component={ProductForm} />
    <Route path="/new/imageProfile" component={AddImage} />
    <Route path="/detail/:id" component={Detail} />
    </Switch>)


