import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Icon } from 'antd';


class Signup extends Component{
    state={
        newUser:{},
        errors: {}
    }
    eventHandler=(e)=>{
        let {newUser, errors} = this.state
        newUser[e.target.name] = e.target.value
        errors = {}
        if (newUser.password !== newUser.password2) errors.password = "Passwords need to match"
        // console.log(newUser)
        this.setState({ newUser, errors })
    }
    sendToServer=()=>{
        let {newUser} = this.state
        let url = "https://foodie-backend.herokuapp.com/signup"
        axios.post(url,newUser)
        .then(user=>{
            // console.log(user)
            this.props.history.push('/login')
        })
        .catch(e=>console.log(e))
        
    }
    render(){
        const {newUser,errors}= this.state
        if(!newUser)return<div>Loading...</div>
        return(
            <div className="login-container">
            <div className="main-card">
            <div className="login-card">
                <h2>Sign up</h2>
                <Link to="chef/signup">Want to work as a <b>Chef</b>?</Link>
                <input className="signup-input" onChange={this.eventHandler} name="username" type="text" placeholder="Username" />
                <input className="signup-input" onChange={this.eventHandler} name="email" type="text" placeholder="Email" />
                <input className="signup-input" onChange={this.eventHandler} name="password" type="password" placeholder="Password" />
                <input className="signup-input" onChange={this.eventHandler} name="password2" type="password" placeholder="Re-type password" />
                <p style={{ color: "red" }}>{errors.password}</p>
            </div>
                <button onClick={this.sendToServer}>Register</button>
            </div>

            </div>
        )
    }
}

export default Signup