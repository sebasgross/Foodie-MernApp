import React, { Component } from 'react'
import axios from 'axios'
import { Icon } from 'antd';



class SignupChef extends Component{
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
        newUser.chef = true
        let url = "https://foodie-backend.herokuapp.com/chef/signup"
        axios.post(url,newUser)
        .then(user=>{
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
          <h3>Sign up for Chef position</h3>

               
                <div >
                <Icon style={{ fontSize: '20px', color: 'blue' }} className="icons" type="facebook" />
                <Icon style={{ fontSize: '20px'}} className="icons" type="google" />
                </div>
                <input className="signup-input" onChange={this.eventHandler} name="username" type="text" placeholder="Chef name" />
                <input className="signup-input" onChange={this.eventHandler} name="email" type="text" placeholder="Email" />
                <input className="signup-input" onChange={this.eventHandler} name="password" type="password" placeholder="Password" />
                <input className="signup-input" onChange={this.eventHandler} name="password2" type="password" placeholder="Re-type password" />
               
                <p style={{ color: "red" }}>{errors.password}</p>
                </div>
            <div className="hello-card"> 
                <p>Welcome to our team Chef!</p>
          
                <button onClick={this.sendToServer}>Register</button>
            </div>
            </div>

            </div>
        )
    }
}

export default SignupChef